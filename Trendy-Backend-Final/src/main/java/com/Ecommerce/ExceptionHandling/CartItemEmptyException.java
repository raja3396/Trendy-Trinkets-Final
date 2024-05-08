package com.Ecommerce.ExceptionHandling;

public class CartItemEmptyException extends RuntimeException{
	
	public String message;

	public CartItemEmptyException(String message) {
		super(message);
		this.message = message;
	}
	
	public String getmsg(String message) {
		
		return message;
	}

}
