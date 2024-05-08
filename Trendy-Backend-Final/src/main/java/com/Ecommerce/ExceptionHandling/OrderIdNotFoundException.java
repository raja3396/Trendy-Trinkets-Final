package com.Ecommerce.ExceptionHandling;

public class OrderIdNotFoundException extends RuntimeException{
	
	public String message;

	
	public OrderIdNotFoundException(String message) {
		super(message);
		this.message = message;
	}


	public String getmsg(String message) {
		
		return message;
	}

}
