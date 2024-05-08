package com.Ecommerce.ExceptionHandling;

public class SellerNotFoundException extends RuntimeException{
	
	public String message;

	
	public SellerNotFoundException(String message) {
		super(message);
		this.message = message;
	}


	public String getmsg(String message) {
		
		return message;
	}

}
