package com.cart.misc;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;


@Component
public class ShoeProductDAO {

		@Autowired
		private DataSource dataSource;
		@Autowired
		private JdbcTemplate jdbcTemplate;

		public List<ShoeProduct> shoeList(){
			String SQL="SELECT * FROM ShoeTable";

				List <ShoeProduct> students = jdbcTemplate.query(SQL, new ShoeMapper());
		return students;
		}
		
		public ShoeProduct thisShoeProduct(String productID){
			String SQL="SELECT * FROM ShoeTable WHERE ProductID=?";
			ShoeProduct shoeProduct= (ShoeProduct)jdbcTemplate.queryForObject(SQL, new Object[]{productID}, new ShoeMapper());
			return shoeProduct;
		}
}

