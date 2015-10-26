package com.cart.misc;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class UserMapper implements RowMapper<User>{
	
	   public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		   User student = new User();
	      student.setSerial(rs.getInt("serial"));
	      student.setUsername(rs.getString("username"));
	      student.setPassword(rs.getString("password"));
	      return student;
	}
}
