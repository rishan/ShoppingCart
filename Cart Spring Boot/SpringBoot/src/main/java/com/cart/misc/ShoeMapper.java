package com.cart.misc;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class ShoeMapper implements RowMapper<ShoeProduct>{
	public ShoeProduct mapRow(ResultSet rs, int rowNum) throws SQLException {
		ShoeProduct shoeproduct = new ShoeProduct();
		
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
		shoeproduct.setTechnologyused(rs.getString("Technologyused"));
		shoeproduct.setStyle1(rs.getString("Style1"));
		shoeproduct.setDesign(rs.getString("Design"));
		shoeproduct.setOtherdetails(rs.getString("Otherdetails"));
		shoeproduct.setColor(rs.getString("Color"));

	     return shoeproduct;
	}
}
