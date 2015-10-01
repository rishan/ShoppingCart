package com.cart.shop;

import java.io.IOException;
import java.io.PrintWriter;
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
import com.mysql.jdbc.*;

@WebServlet("/Shop")
public class Shop extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String productType = request.getParameter("type").toString();
		//System.out.println(productType);



		try{
			Class.forName("com.mysql.jdbc.Driver"); 
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","beehyv123");
			java.sql.Statement state=con.createStatement();
			response.setContentType("json");
			String json="[";
			//String[] jsonArray=new String[10];
			
			if(productType.equals("shoes")){
				ResultSet rs=state.executeQuery("SELECT * FROM ShoeTable");
				int i=0;
				while(rs.next()){
					ShoeProduct shoeproduct = new ShoeProduct();
					ObjectMapper objectMapper = new ObjectMapper();
					
					shoeproduct.setProductID(rs.getString("ProductID"));
					shoeproduct.setProductimage(rs.getString("ProductImage"));
					shoeproduct.setDescription(rs.getString("Description"));
					shoeproduct.setPrice(rs.getDouble("Price"));
					shoeproduct.setPricerange(rs.getString("pricerange"));
					shoeproduct.setGender(rs.getString("gender"));
					shoeproduct.setStock(rs.getString("stock"));
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
					shoeproduct.setWeight(rs.getString("Weight"));

					json = json+objectMapper.writeValueAsString(shoeproduct)+",";
//					jsonArray[i]=json;
//					i++;
				}			 
			}
			json = json.substring(0, json.length()-1);
			json+="]";
			PrintWriter out = response.getWriter();
			//System.out.println(json);
			out.write(json);
//			out.println(jsonArray);
			out.close();
			state.close();
			con.close();

		}
		catch(Exception e){
			System.out.println(e);
		}
		
	}

}
