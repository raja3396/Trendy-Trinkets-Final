package com.Ecommerce.ExceptionHandling;

public class CartIdNotFoundException extends RuntimeException{
	
	public String message;

	public CartIdNotFoundException(String message) {
		super(message);
		this.message = message;
	}
	
	public String message() {
		return message;
	}
	
	
	

}
