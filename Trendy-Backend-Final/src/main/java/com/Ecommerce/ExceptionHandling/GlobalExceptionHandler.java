package com.Ecommerce.ExceptionHandling;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;



@RestControllerAdvice
public class GlobalExceptionHandler {
	
	
    @ExceptionHandler(InvalidProductException.class)
	public ResponseEntity<ErrorInfo> invalidpriceexp(InvalidProductException exeption){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(exeption.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
    	
    	
		return new ResponseEntity<ErrorInfo>(errorInfo,HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(InvalidUserException.class)
	public ResponseEntity<ErrorInfo> invalidUserExceptin(InvalidUserException idNotFoundExceotion){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(idNotFoundExceotion.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ErrorInfo> userNotFoundExp(UserNotFoundException idNotFoundExceotion){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(idNotFoundExceotion.getMessage()) ;
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    @ExceptionHandler(CartItemEmptyException.class)
	public ResponseEntity<ErrorInfo> cartItemEmptyExp(CartItemEmptyException cartItemEmptyException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(cartItemEmptyException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(CartIdNotFoundException.class)
	public ResponseEntity<ErrorInfo> cartIdNotFoundExp(CartIdNotFoundException cartIdNotFoundException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(cartIdNotFoundException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(OrderIdNotFoundException.class)
	public ResponseEntity<ErrorInfo> cartIdNotFoundExp(OrderIdNotFoundException cartIdNotFoundException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(cartIdNotFoundException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(OrderItemEmptyException.class)
	public ResponseEntity<ErrorInfo> cartIdNotFoundExp(OrderItemEmptyException orderItemEmptyException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(orderItemEmptyException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(ProductNotFoundException.class)
	public ResponseEntity<ErrorInfo> cartIdNotFoundExp(ProductNotFoundException productNotFoundException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(productNotFoundException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    

    @ExceptionHandler(UserAlreadyExistedException.class)
	public ResponseEntity<ErrorInfo> userAlreadyExistedExcep(UserAlreadyExistedException userAlreadyExistedException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(userAlreadyExistedException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}

    @ExceptionHandler(CategoryIdNotFound.class)
	public ResponseEntity<ErrorInfo> userAlreadyExistedExcep(CategoryIdNotFound categoryIdNotFound){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(categoryIdNotFound.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(SellerNotFoundException.class)
	public ResponseEntity<ErrorInfo> userAlreadyExistedExcep(SellerNotFoundException sellerNotFoundException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(sellerNotFoundException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
    
    @ExceptionHandler(SelllerEmptyProductsException.class)
	public ResponseEntity<ErrorInfo> userAlreadyExistedExcep(SelllerEmptyProductsException emptyProductsException){
    	ErrorInfo errorInfo = new ErrorInfo();
    	errorInfo.setErrorMessage(emptyProductsException.getMessage());
    	errorInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
    	errorInfo.setLocalDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
		
	}
}
