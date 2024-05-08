package com.Ecommerce.ExceptionHandling;

public class InvalidProductException extends RuntimeException{
	
	public String message;
	
	public InvalidProductException(String message){
		super(message);
		this.message = message;
	}
		
	

     String getmsg() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
