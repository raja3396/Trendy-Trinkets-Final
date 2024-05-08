package com.Ecommerce.ExceptionHandling;

public class ProductNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public String message;
	
	public ProductNotFoundException(String message) {
		super(message);
		this.message = message;
		
	}
	public String getmsg() {
		return message;
	}

}
