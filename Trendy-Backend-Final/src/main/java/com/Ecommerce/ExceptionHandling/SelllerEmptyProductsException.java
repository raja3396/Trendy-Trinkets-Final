package com.Ecommerce.ExceptionHandling;

public class SelllerEmptyProductsException extends RuntimeException{

	
    public String message;
	


	public SelllerEmptyProductsException(String message) {
		super(message);
		this.message = message;
	}




	public String getmsg() {
		return message;
	}


}
