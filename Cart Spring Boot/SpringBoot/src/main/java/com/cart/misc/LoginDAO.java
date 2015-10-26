package com.cart.misc;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class LoginDAO {
	@Autowired
	private DataSource dataSource;
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public User isUser(String username, String password)throws EmptyResultDataAccessException{
		String SQL="select * from mytable where username=?";
		try{
			User student = (User)jdbcTemplate.queryForObject(SQL, 
                new Object[]{username}, new UserMapper());
		
		if (password.equals(student.getPassword())){
			
			return new User(username,password);
		}
		else{
			return new User();
		}
		}
		catch(Exception e){
			return new User();
		}
		
	}
	public String isAlreadyUser(String username){
		String SQL="select * from mytable where username=?";
		try{
			User student = (User)jdbcTemplate.queryForObject(SQL, 
                new Object[]{username}, new UserMapper());
			return "yes";
		}
		catch(Exception e){
			return "no";
		}
	}
	public void addUser(String username, String password){
		String SQL="insert into mytable(username,password) values(?,?)";
		jdbcTemplate.update(SQL,username,password);
	}
}
