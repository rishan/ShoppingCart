package com.cart.shop;

import java.io.IOException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import com.cart.model.ShoeProduct;

@WebServlet(asyncSupported = false, urlPatterns = { "/Product1" })
public class Product1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String clickedProductID=request.getParameter("clickedProductID");
//		response.sendRedirect("html/product1.jsp");

		//System.out.println("clicked product id="+clickedProductID);
		
		try{
			Class.forName("com.mysql.jdbc.Driver"); 
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","beehyv123");
			java.sql.Statement state=con.createStatement();
			//response.setContentType("json");
			//String json="[";
			//String[] jsonArray=new String[10];
				ResultSet rs=state.executeQuery("SELECT * FROM ShoeTable WHERE ProductID='"+clickedProductID+"';");
				ShoeProduct shoeproduct = new ShoeProduct();
					
					ObjectMapper objectMapper = new ObjectMapper();
					while(rs.next()){
					//System.out.println("entered while");
					shoeproduct.setProductID(rs.getString("ProductID"));
					shoeproduct.setProductimage(rs.getString("ProductImage"));
					shoeproduct.setDescription(rs.getString("Description"));
					shoeproduct.setPrice(rs.getDouble("Price"));
					shoeproduct.setPricerange(rs.getString("pricerange"));
					shoeproduct.setGender(rs.getString("gender"));
					shoeproduct.setStock(rs.getString("stock"));
					shoeproduct.setStyle1(rs.getString("Style1"));
					shoeproduct.setType(rs.getString("type"));
					shoeproduct.setProductimage2(rs.getString("Productimage2"));
					shoeproduct.setProductimage3(rs.getString("Productimage3"));
					shoeproduct.setProductimage4(rs.getString("Productimage4"));
					shoeproduct.setProductimage5(rs.getString("Productimage5"));
					shoeproduct.setProductimage6(rs.getString("Productimage6"));
					shoeproduct.setAvailability(rs.getString("Availability"));
					shoeproduct.setNoreviews(rs.getDouble("noreviews"));
					shoeproduct.setUnitPrice(rs.getDouble("UnitPrice"));
					shoeproduct.setDiscount(rs.getDouble("Discount"));
					shoeproduct.setIdealfor(rs.getString("Idealfor"));
					shoeproduct.setOccasion(rs.getString("Occasion"));
					shoeproduct.setClosure(rs.getString("Closure"));
					shoeproduct.setTipShape(rs.getString("TipShape"));
					shoeproduct.setTechnologyused(rs.getString("Technologyused"));
					shoeproduct.setColor(rs.getString("Color"));
					shoeproduct.setDesign(rs.getString("Design"));
					shoeproduct.setOtherdetails(rs.getString("Otherdetails"));
					shoeproduct.setWeight(rs.getString("Weight"));

					//json = json+objectMapper.writeValueAsString(shoeproduct)+",";
//					jsonArray[i]=json;
//					i++;
					 
			
			//json = json.substring(0, json.length()-1);
			//json+="]";
			//PrintWriter out = response.getWriter();
			//System.out.println(json);
			//out.write(json);
			//out.println(shoeproduct);
//			out.println(jsonArray);
					request.getSession(false).setAttribute("clickedProduct", shoeproduct);
					//System.out.println(objectMapper.writeValueAsString(shoeproduct));
					//response.sendRedirect("html/product1.jsp");
			//out.close();
			if(rs.next())		
				break;		
			}
					//System.out.println("Broke out of while");
					response.sendRedirect("html/product1.jsp");

			state.close();
			con.close();
					

		}
		catch(Exception e){
			System.out.println("Caught Exception "+e);
		}

	}

}
