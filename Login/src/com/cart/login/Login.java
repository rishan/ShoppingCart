package com.cart.login;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		String userID=request.getParameter("userID");
		String pass=request.getParameter("login-pwd");
		
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","beehyv123");
			Statement state=con.createStatement();
			ResultSet rs=state.executeQuery("SELECT * FROM mytable");
			
			
			while(rs.next()){
				//System.out.println("entered first if");
				String dbPassword = rs.getString("password");
				String dbUsername = rs.getString("username");
				//System.out.println(dbUsername+""+dbPassword);
				if(dbPassword.equals(pass) && (dbUsername.equals(userID))){//equalsIgnoreCase
					request.getRequestDispatcher("/html/Successful_login.jsp").forward(request, response);
					HttpSession session=request.getSession();  
			        session.setAttribute("userID",dbUsername);
			        session.setAttribute("login-pwd",dbPassword);
					//System.out.println("entered second if");
					break;
				}
				if(!rs.isLast()){
					continue;
				}
				else{
					//response.sendRedirect("Login.jsp");
					//System.out.println("entered second else");
					HttpSession session=request.getSession();
					session.setAttribute("error-message", "The username or password is wrong");
					//request.getRequestDispatcher("/html/Login.jsp").forward(request, response);
					response.sendRedirect("html/Login.jsp");
				}
			}
				
			state.close();
			con.close();
		}
		catch(SQLException | ClassNotFoundException sqle){
			System.out.println(sqle.toString());
		}
		
	}
}
