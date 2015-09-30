package com.cart.login;

import java.io.IOException;
import java.io.PrintWriter;
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

@WebServlet(description = "gets post request from register page and adds user to database", urlPatterns = { "/Register" })
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userID=request.getParameter("reg-fname");
		String pass=request.getParameter("reg-psw");
		PrintWriter writer=response.getWriter();
		writer.println("<h1>Hello </h1>");
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","beehyv123");
			Statement state=con.createStatement();
			
			//is user already in database?
			ResultSet rs=state.executeQuery("SELECT * FROM mytable");
			boolean bool=false;
			while(rs.next()){
				String dbUsername = rs.getString("username");
				if(userID.equalsIgnoreCase(dbUsername)){
					response.setContentType("text/html");
					HttpSession session=request.getSession();
					session.setAttribute("error-message", "You are already a registered user");
					response.sendRedirect("html/Login.jsp");
					bool=true;
					
				}
			}
			if(!bool){
			state.executeUpdate("INSERT INTO mytable(username,password) VALUES (\""+userID.toLowerCase()+"\",\""+pass+"\")");
	        request.getRequestDispatcher("/Login/html/Login.jsp").forward(request, response);
			}
			state.close();
			con.close();
		}
		catch(SQLException | ClassNotFoundException sqle){
			System.out.println(sqle.toString());
		}
		
	}
}
