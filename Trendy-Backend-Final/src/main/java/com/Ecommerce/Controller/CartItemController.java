package com.Ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.CartItem;
import com.Ecommerce.Service.CartItemImplementation;

@CrossOrigin
@RestController
public class CartItemController {
	
	@Autowired
	CartItemImplementation cartItemImplementation;
	
	@PostMapping("/cart/{productId}/{customerId}")
	public ResponseEntity<MessageInfo> addProductToCart(@PathVariable Long productId,@PathVariable Long customerId){
		return new ResponseEntity<MessageInfo>(cartItemImplementation.addProductsToCart(productId, customerId), HttpStatus.OK);
		
	}
	
	
	@DeleteMapping("/cart/{productId}/{customerId}")
	public ResponseEntity<MessageInfo> deleteProdutFromCart(@PathVariable Long productId,@PathVariable Long customerId){
		return new ResponseEntity<MessageInfo>(cartItemImplementation.deleteItemsFromCart(productId,customerId),HttpStatus.OK);
	}
	
	@GetMapping("/cart/{customerId}")
	public ResponseEntity<List<CartItem>> getAllCartItemsBasedOnCustomerId(@PathVariable Long customerId){
		
		return new ResponseEntity<List<CartItem>>(cartItemImplementation.getAllCartItemBasedOnCustomerId(customerId), HttpStatus.OK);
	}
	
}
 