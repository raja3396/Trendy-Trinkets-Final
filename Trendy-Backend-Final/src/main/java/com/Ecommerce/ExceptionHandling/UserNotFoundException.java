package com.Ecommerce.ExceptionHandling;

public class UserNotFoundException extends RuntimeException{
public String message;
	
	public UserNotFoundException(String message){
		super(message);
		this.message = message;
		
	}
	public String getmsg() {
		return message;
	}


}
