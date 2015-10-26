package com.cart.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.cart.misc.CartDAO;
import com.cart.misc.LoginDAO;
import com.cart.misc.ShoeProduct;
import com.cart.misc.ShoeProductDAO;
import com.cart.misc.User;

@Controller
public class Login {
	@Autowired
	private DataSource dataSource;
	@Autowired
	private LoginDAO loginDAO;
	@Autowired
	private ShoeProductDAO shoeProductDAO;
	@Autowired
	private CartDAO cartDAO;
	
	@RequestMapping(value="/coolStuff")
	public ModelAndView landingPage(){
		return new ModelAndView("landing_page.html");
	}
	
	@RequestMapping(value="/login")
	public ModelAndView loginPage() {
			return new ModelAndView("Login.html");
	}
	
	@RequestMapping(value="/register")
	public ModelAndView registerPage(){
		return new ModelAndView("Register.html");
	}
	
	@RequestMapping(value="/newUser",method=RequestMethod.POST)
	@ResponseBody
	public String newUser(@RequestParam String userID,HttpServletRequest request){
		if(loginDAO.isAlreadyUser(userID).equals("yes")){
			return "This username is already registered";
		}
		else
			return "";
	}
	
	@RequestMapping(value="/regUser",method=RequestMethod.POST)
	public void regUser(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String username= request.getParameter("reg-userID");
		String password=request.getParameter("reg-psw");
		User newUser=loginDAO.isUser(username,password);
		if(!newUser.getUsername().equals("NewUser")){
			HttpSession session=request.getSession();
			session.setAttribute("error-message", "You are already a registered user");
			response.sendRedirect("/login");
		}
		else{
			loginDAO.addUser(username,password);
			HttpSession session=request.getSession();
			session.setAttribute("error-message", "Welcome!!New User");
			response.sendRedirect("/login");
		}
		
	}
	
	
	@RequestMapping(value="/getUserName")
	@ResponseBody
	public String userName(HttpServletRequest request){
		String username=(String) request.getSession().getAttribute("username");
		//System.out.println("username sent from controller "+username);
		return username;
	}
	
	@RequestMapping(value="/checkUser" ,method= RequestMethod.POST)
	public void checkUser(HttpServletRequest request,HttpServletResponse response) throws IOException{
		//System.out.println("HI");
		String username= request.getParameter("username");
		String password=request.getParameter("password");
		User newUser=loginDAO.isUser(username,password);
		if(!newUser.getUsername().equals("NewUser")){
			//System.out.println("Yippee!!Working with Spring");
			HttpSession session=request.getSession();
			session.setAttribute("username", username);
			//System.out.println("set username in session= "+username);
			response.sendRedirect("/shop");
		}
		else{
			HttpSession session=request.getSession();
			session.setAttribute("error-message", "The username or password is wrong");
			response.sendRedirect("/login");
		}
	}
	
	@RequestMapping(value="/getErrorMsg")
	@ResponseBody
	public String loginError(HttpServletRequest request){
		return (String) request.getSession().getAttribute("error-message");		
	}
	

	@RequestMapping(value="/shop")
	public ModelAndView shopPage(){
		return new ModelAndView("shop.html");
	}
	

	@RequestMapping(value="/getShoes")
	@ResponseBody
	public List<ShoeProduct> shoePage(){
		List<ShoeProduct> shoes=shoeProductDAO.shoeList();
		return shoes;
		
	}
	
	@RequestMapping(value="/shoeList")
	public ModelAndView shoeListPage(@RequestParam String clickedProductID,HttpServletRequest request){
		request.getSession().setAttribute("clickedProductId", clickedProductID);
		//System.out.println("product id passed from shop page is "+clickedProductID);
		return new ModelAndView("redirect:/shoeProductPage");
		
	}
	
	@RequestMapping(value="/shoeProductPage")
	public ModelAndView productPage(){
		return new ModelAndView("product1.html");
	}
	
	
	@RequestMapping(value="/shoeProduct")
	@ResponseBody
	public ShoeProduct shoeProductPage(HttpServletRequest request){
		String productID=(String) request.getSession().getAttribute("clickedProductId");
		//System.out.println("product id is "+productID);
		ShoeProduct thisShoe=shoeProductDAO.thisShoeProduct(productID);
		//System.out.println("this shoe is "+thisShoe.toString());
		return thisShoe;
	}
	@ResponseBody
	@RequestMapping(value="/addtocart",method= RequestMethod.POST)
	public void addToCartPage(@RequestParam String clickedProductID,@RequestParam String username,HttpServletRequest request){
	/*	String clickedProductID= request.getParameter("clickedProductID");
		String username=request.getParameter("username");*/
		cartDAO.addToCart(clickedProductID, username);
	}
	@ResponseBody
	@RequestMapping(value="/deletefromcart",method= RequestMethod.POST)
	public void deleteFromCartPage(HttpServletRequest request){
		String clickedProductID= request.getParameter("clickedProductID");
		String username=(String) request.getSession().getAttribute("username");
		System.out.println(username+""+clickedProductID );
		cartDAO.deleteFromCart(clickedProductID, username);
	}
	
	@ResponseBody
	@RequestMapping(value="/changeQty",method= RequestMethod.POST)
	public void changeQty(@RequestParam String clickedProductID,@RequestParam Integer quantity,HttpServletRequest request){
		String username=(String) request.getSession().getAttribute("username");
		cartDAO.increaseQuantity(clickedProductID, username, quantity);
	}
	
	
	@RequestMapping(value="/isincart",method= RequestMethod.POST)
	public void isInCart(@RequestParam String clickedProductID,HttpServletRequest request,HttpServletResponse response) throws IOException{
		String username=(String) request.getSession().getAttribute("username");
		String isInCart=cartDAO.isInCart(clickedProductID, username);
		PrintWriter out=response.getWriter();
		out.println(isInCart);
		
	}
	
	
	@RequestMapping(value="/cart")
	public ModelAndView cartPage(){
		return new ModelAndView("Cart.html");
	}
	
	@RequestMapping(value="/cartproducts")
	@ResponseBody
	public List<ShoeProduct> cartProducts(HttpServletRequest request){
		String username=(String) request.getSession().getAttribute("username");
		List<ShoeProduct> shoeList=cartDAO.listItems(username);
		return shoeList;
	}
	
	@RequestMapping(value="/getQty",method=RequestMethod.POST)
	@ResponseBody
	public Integer quantity(@RequestParam String clickedProductID,HttpServletRequest request){
		String username=(String) request.getSession().getAttribute("username");
		Integer quantity=cartDAO.getQty(clickedProductID,username);
		return quantity;
	}
	
	@RequestMapping(value="/cartTotal",method= RequestMethod.POST)
	@ResponseBody
	public Integer totalValue(HttpServletRequest request){
		String username=(String) request.getSession().getAttribute("username");
		Integer total=cartDAO.cartTotal(username);
		return total;
	}
	
	
	@RequestMapping(value="/logout")
	public ModelAndView logoutPage(HttpServletRequest request){
		request.getSession().invalidate();
		return new ModelAndView("Logout.html");
	}
}
