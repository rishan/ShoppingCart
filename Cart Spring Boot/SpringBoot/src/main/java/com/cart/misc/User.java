package com.cart.misc;

import java.io.Serializable;

public class User implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Integer serial;
	private String username;
	private String password;
	
	public User(){
		this.serial=0;
		this.username="NewUser";
		this.password="invalid";
	}
	
	public User(String username,String password){
		this.username=username;
		this.password=password;
	}
	
	public Integer getSerial() {
		return serial;
	}
	public void setSerial(Integer serial) {
		this.serial = serial;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
