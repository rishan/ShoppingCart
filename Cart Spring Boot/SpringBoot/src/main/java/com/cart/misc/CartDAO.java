package com.cart.misc;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class CartDAO {

	@Autowired
	private DataSource dataSource;
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private ShoeProductDAO shoeProductDAO;
	
	public void addToCart(String clickedProductID,String username){
		try{
			 int quantity=1;
		 String SQL="insert into carttable(username,productID,quantity) values(?,?,?)";
		 jdbcTemplate.update(SQL,username,clickedProductID,quantity);
		 }
		 catch(Exception e){
			 System.out.println(e);
		 }
		 return;
	}
	
	public void deleteFromCart(String clickedProductID,String username){
		 String SQL="delete from carttable where username=? and productID=?";
		 jdbcTemplate.update(SQL,username,clickedProductID);
	}
	
	public void increaseQuantity(String clickedProductID,String username,Integer quantity){
		if(quantity!=0){
		String SQL="update carttable set quantity=? where username=? and productID=?";
		 jdbcTemplate.update(SQL,quantity,username,clickedProductID);
		}
		else{
			deleteFromCart(clickedProductID,username);
		}
	}

	public List<ShoeProduct> listItems(String username){
		String SQL="select productID from carttable where username=?";
		List<String> productList=jdbcTemplate.queryForList(SQL,  new Object[]{username}, String.class);
		List<ShoeProduct> shoeList=new ArrayList<ShoeProduct>();
		for(String x :productList){
			shoeList.add(shoeProductDAO.thisShoeProduct(x));
		}
		return shoeList;
	}
	
	public String isInCart(String productID,String username){
		String SQL="select serial from carttable where productID=? and username=?";
		List<String> productList=jdbcTemplate.queryForList(SQL, new Object[]{productID, username}, String.class);
		if(productList.isEmpty()){
			return "yes";
		}
		else{
			return "no";
		}
	}
	
	public Integer cartTotal(String username){
		String SQL="select productID from carttable where username=?";
		List<String> productList=jdbcTemplate.queryForList(SQL, new Object[]{username}, String.class);
		List<Integer> productPriceList=new ArrayList<Integer>();
		List<Integer> quantity=new ArrayList<Integer>();
		List<Integer> totalPrice=new ArrayList<Integer>();
		Integer total=0;
		Iterator<String> iterator=productList.iterator();
		while(iterator.hasNext()){
			String productID=iterator.next();
			String SQL1="select Price from ShoeTable where productID=?";
			List<Integer> price=jdbcTemplate.queryForList(SQL1,new Object[]{productID},Integer.class);
			productPriceList.add(price.get(0));
			String SQL2="select quantity from carttable where username=? and productID=?";
			List<Integer> qty=jdbcTemplate.queryForList(SQL2,new Object[]{username,productID},Integer.class);
			quantity.add(qty.get(0));
		}
		
		for(Integer i=0;i<quantity.size();i++){
			totalPrice.add(quantity.get(i)*productPriceList.get(i));
		}
		Iterator<Integer> iterator1=totalPrice.iterator();
		while(iterator1.hasNext()){
			total+=iterator1.next();
		}
		System.out.println("total is "+total);
		return total;
	}
	
	public Integer getQty(String clickedProductID,String username){
		String SQL="select quantity from carttable where productID=? and username=?";
		List<Integer> qty=jdbcTemplate.queryForList(SQL,new Object[]{clickedProductID,username},Integer.class);
		return qty.get(0);
	}
}
