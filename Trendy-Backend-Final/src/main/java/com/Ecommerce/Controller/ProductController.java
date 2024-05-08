package com.Ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.ProductName;
import com.Ecommerce.Service.ProductServiceImplementation;

@CrossOrigin
@RestController
public class ProductController {
	
	@Autowired
	ProductServiceImplementation productServiceImplementation;
	
	@PostMapping("/addproduct/{categoryId}/{sellerId}")
	public ResponseEntity<MessageInfo> addProducts(@PathVariable Long categoryId,@PathVariable Long sellerId,@RequestBody ProductName productName){
		
		return new ResponseEntity<MessageInfo>(productServiceImplementation.addProducts(categoryId,sellerId,productName), HttpStatus.OK);
		
	}
 	
	@GetMapping("/product")
	public ResponseEntity<List<ProductName>> getAllProducts(){
		
		return new ResponseEntity<List<ProductName>>(productServiceImplementation.getAllProducts(), HttpStatus.OK);
	}
	
	@GetMapping("/getProductByCategory/{categoryId}")
	public ResponseEntity<List<ProductName>> categoryWiseProducts(@PathVariable Long categoryId){
		return new ResponseEntity<List<ProductName>>(productServiceImplementation.categoryWiseProductsList(categoryId), HttpStatus.OK);
	}
	
	@GetMapping("/getProduct/{productId}")
	public ResponseEntity<ProductName> getProductById(@PathVariable Long productId){
		return new ResponseEntity<ProductName>(productServiceImplementation.getProductById(productId), HttpStatus.OK);
	}
	
	@GetMapping("/getsellerProducts/{sellerId}")
	public ResponseEntity<List<ProductName>> GerProductDetailsBasedOnSellerId(@PathVariable Long sellerId){
		return new ResponseEntity<List<ProductName>>(productServiceImplementation.getAllProductsBasedOnSellerId(sellerId), HttpStatus.OK);
	}
	
	

}
