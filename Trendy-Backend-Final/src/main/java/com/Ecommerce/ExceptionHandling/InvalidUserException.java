package com.Ecommerce.ExceptionHandling;

public class InvalidUserException extends RuntimeException{
	
	public String message;
	
	public InvalidUserException(String message){
		super(message);
		this.message = message;
		
	}

	public String getmsg() {
		// TODO Auto-generated method stub
		return null;
	}

}
