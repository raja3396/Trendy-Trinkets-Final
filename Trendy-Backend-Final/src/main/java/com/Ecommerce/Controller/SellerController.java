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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.DTO.SellerDetailsDto;
import com.Ecommerce.Entity.ProductName;
import com.Ecommerce.Entity.Seller;
import com.Ecommerce.Service.SellerServiceImplementation;

@CrossOrigin
@RestController
public class SellerController {
	
	@Autowired
	SellerServiceImplementation sellerServiceImplementation;
	
	
	@PostMapping("/sellerRegister/{customerId}")
	public ResponseEntity<MessageInfo> RegisterSellerDetails(@PathVariable Long customerId,@RequestBody Seller sellerRequest){
		return new ResponseEntity<MessageInfo>(sellerServiceImplementation.sellerRegistration(customerId,sellerRequest),HttpStatus.OK);	
	}
	
	@GetMapping("/admin_only/getsellerdetails")
	public ResponseEntity<List<Seller>> getAllUsers(){
		return new ResponseEntity<List<Seller>>(sellerServiceImplementation.getAllseller(), HttpStatus.OK);
	}
	
//	@PutMapping("/seller/{customerId}")
//	public ResponseEntity<MessageInfo> updateProductsByTheSeller(@PathVariable Long customerId,@RequestBody ProductName product){
//		
//		return new ResponseEntity<MessageInfo>(sellerServiceImplementation.updateProductAddedBySeller(product, customerId),HttpStatus.OK);
//	}

    @PutMapping("/seller/{sellerId}/{productId}")
	public ResponseEntity<MessageInfo> updateProductsByTheSeller(@RequestBody ProductName product,@PathVariable Long sellerId,@PathVariable Long productId){
		
		return new ResponseEntity<MessageInfo>(sellerServiceImplementation.updateProductAddedBySeller(product,sellerId,productId),HttpStatus.OK);
	}
		
	@DeleteMapping("/seller/{productId}/{customerId}")
	public ResponseEntity<MessageInfo> deleteProductsAddedBySeller(@PathVariable Long productId,@PathVariable Long customerId){
		
		return new ResponseEntity<MessageInfo>(sellerServiceImplementation.deleteProductAddedBySeller(productId, customerId), HttpStatus.OK);
	}
	
	@GetMapping("/sellerByCusomterId/{customerId}")
	public ResponseEntity<SellerDetailsDto> getSellerDetailsByCustomerId(@PathVariable Long customerId){
		
		return new ResponseEntity<SellerDetailsDto>(sellerServiceImplementation.getSellerDetailsByCustomerId(customerId), HttpStatus.OK);
	}

}
