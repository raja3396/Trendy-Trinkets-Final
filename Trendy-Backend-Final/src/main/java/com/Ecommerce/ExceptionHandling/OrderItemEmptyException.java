package com.Ecommerce.ExceptionHandling;

public class OrderItemEmptyException extends RuntimeException {
	
	public String message;

	public OrderItemEmptyException(String message) {
		super(message);
		this.message = message;
	}


	public String getmsg(String message) {
		
		return message;
	}


}
