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

@WebServlet("/Cart")
public class Cart extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String cart_operation=request.getParameter("cart");
		String productID=request.getParameter("clickedProductID");
		String userID=request.getSession().getAttribute("userID").toString();
		try{
			Class.forName("com.mysql.jdbc.Driver"); 
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","beehyv123");
			java.sql.Statement state=con.createStatement();
			if(cart_operation.equals("add")){
				state.executeUpdate("INSERT INTO carttable(username,productID,quantity) VALUES (\""+userID+"\",\""+productID+"\",\""+1+"\")");
			}
			else{
				ResultSet rs=state.executeQuery("delete FROM carttable WHERE productID='"+productID+"';");
			}
		}
	catch(Exception e){}

}
}
