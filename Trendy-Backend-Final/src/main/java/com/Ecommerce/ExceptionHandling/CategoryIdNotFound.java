package com.Ecommerce.ExceptionHandling;

public class CategoryIdNotFound extends RuntimeException{
	
	
public String message;
	
	
	public CategoryIdNotFound(String message) {
	super(message);
	this.message = message;
	}


	public String getmsg() {
		return message;
	}


	

}
