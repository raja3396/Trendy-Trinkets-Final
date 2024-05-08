package com.Ecommerce.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.CartItemRespository;
import com.Ecommerce.DAO.OrderItemRespository;
import com.Ecommerce.DAO.ProductRepository;
import com.Ecommerce.DAO.SellerRepository;
import com.Ecommerce.DAO.UserRespository;
import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.DTO.SellerDetailsDto;
import com.Ecommerce.Entity.CartItem;
import com.Ecommerce.Entity.OrderItem;
import com.Ecommerce.Entity.Orders;
import com.Ecommerce.Entity.ProductName;
import com.Ecommerce.Entity.Seller;
import com.Ecommerce.Entity.User;
import com.Ecommerce.ExceptionHandling.ProductNotFoundException;
import com.Ecommerce.ExceptionHandling.SellerNotFoundException;
import com.Ecommerce.ExceptionHandling.UserNotFoundException;
import com.Ecommerce.Util.AppConstant;


@Service
public class SellerServiceImplementation implements SellerServiceInterface{
	
	
	@Autowired
	SellerRepository sellerRepository;
	
	@Autowired
	UserRespository userRespository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	OrderItemRespository orderItemRespository;
	
	@Autowired
	CartItemRespository cartItemRespository;
	@Override
	public MessageInfo sellerRegistration(Long customerId , Seller sellerRequest) {
		
		User userDetails = userRespository.findByCustomerId(customerId);
		if(userRespository.existsById(customerId)) {
			
			if(userDetails.isSeller()) {
				
				return new MessageInfo(AppConstant.SellerAlreadyRegistered);
			}
			else {
				
				Seller seller = new Seller();
				
				seller.setSellerName(sellerRequest.getSellerName());
				seller.setGstNo(sellerRequest.getGstNo());
				seller.setSellerPhoneNumber(sellerRequest.getSellerPhoneNumber());
				seller.setCreatedAt(LocalDate.now());
				seller.setUser(userDetails);
				userDetails.setSeller(true);
				
				sellerRepository.save(seller);
				

				return  new MessageInfo(AppConstant.SellerRegistrationStatus);				
			}
		}
		else {
			
			throw new UserNotFoundException(AppConstant.UserIdNotFound);
		}
		
		
	}

	@Override
	public List<Seller> getAllseller() {
		// TODO Auto-generated method stub
		return sellerRepository.findAll();
	}

//	@Override
//	public MessageInfo updateProductAddedBySeller(ProductName product, Long customerId) {
//		
//		if(productRepository.existsById(product.getProductId())) {
//			
//			ProductName productName = productRepository.findByProductId(product.getProductId());
//			
//			if(userRespository.existsById(customerId)) {
//				
//				User userDetails = userRespository.findByCustomerId(customerId);
//				
//				if(userDetails.isSeller()) {
//
//					productName.setProductName(product.getProductName());
//					productName.setProductImage1(product.getProductImage1());
//					productName.setProductCost(product.getProductCost());
//					productName.setUpdatedAt(LocalDate.now());
//					productName.setDescription(product.getDescription());
//					
//					productRepository.save(productName);
//					
//					return new MessageInfo("Successfully updated the product");
//					
//				}
//				
//				
//			}
//			else {
//				
//				throw new UserNotFoundException(AppConstant.UserIdNotFound);
//			}
//			
//		}
//		else {
//			throw new ProductNotFoundException(AppConstant.productIdNotFound);
//		}
//		
//		
//		return null;
//	}
	
	
	public MessageInfo updateProductAddedBySeller(ProductName product,Long sellerId,Long productId) {
		if (sellerRepository.existsById(sellerId)) {


			if (productRepository.existsById(productId)) {

				ProductName updatedProduct = productRepository.findByProductId(productId);




//		if (productRepository.existsById(productId)) {
//
//			ProductName updatedProduct = productRepository.findByProductId(productId);
				if(product.getProductName()!=null)
				{
					updatedProduct.setProductName(product.getProductName());
				}
				if(product.getProductImage1()!=null)
				{
					updatedProduct.setProductImage1(product.getProductImage1());
				}
				if(product.getProductCost()!=null)
				{
					updatedProduct.setProductCost(product.getProductCost());
				}
				if(product.getDescription()!=null)
				{
					updatedProduct.setDescription(product.getDescription());
				}
				updatedProduct.setUpdatedAt(LocalDate.now());


				productRepository.save(updatedProduct);

				return new MessageInfo("Successfully updated the product");

			}
//		else {
//			throw new ProductNotFoundException(AppConstant.productIdNotFound);
//		}
//	}
			else {
				throw new ProductNotFoundException(AppConstant.productIdNotFound);

			}
		}
		else {
			throw new SellerNotFoundException(AppConstant.SellerNotFound);
		}

	}



	
	@Override
	public MessageInfo deleteProductAddedBySeller(Long productId, Long customerId) {
		
        if(productRepository.existsById(productId)) {
			
			ProductName productName = productRepository.findByProductId(productId);
			
			if(productName != null) {
				
				if(userRespository.existsById(customerId)) {
					
					//User userDetails = userRespository.findByCustomerId(customerId);
					
					List<OrderItem> orderDetails = orderItemRespository.findByProduct(productName);
					
					if(orderDetails != null) {
							
							//here intially before deleting the productDetails we are going to delete order Details in which user
							// has been added to his orders
							
					        List<Long> orderItemIds = new ArrayList<>();
					        for(OrderItem orderItem : orderDetails) {
					            orderItemIds.add(orderItem.getOrderItemId());
					        }
					        
					        System.out.println(orderItemIds);
							orderItemRespository.deleteAllByIdInBatch(orderItemIds);	
					}
					
					List<CartItem> cartDetails = cartItemRespository.findByProduct(productName);
					
					if(cartDetails != null) {
						
						
				        List<Long> cartItemIds = new ArrayList<>();
				        for(CartItem cartItem : cartDetails) {
				            cartItemIds.add(cartItem.getCartItemId());
				        }
				        
				        System.out.println(cartItemIds);

						cartItemRespository.deleteAllByIdInBatch(cartItemIds);	
						
						productRepository.deleteById(productName.getProductId());
						
						return new MessageInfo("Product details are successfully deleted");
						
					}
					
					
					
				}
				else {
					
					throw new UserNotFoundException(AppConstant.UserIdNotFound);
				}

				
				
			}
			else {
				
				throw new ProductNotFoundException(AppConstant.productIdNotFound);
			}
			
						  
		}
		else {
			throw new ProductNotFoundException(AppConstant.productIdNotFound);
		}
		return null;

	}

	@Override
	public SellerDetailsDto getSellerDetailsByCustomerId(Long customerId) {
		
		User userDetails = userRespository.findByCustomerId(customerId);
		
		if(userDetails != null) {
			
			Seller sellerDetails = sellerRepository.findByUser(userDetails);
			
			if(sellerDetails != null) {
				
				return new SellerDetailsDto(sellerDetails.getSellerId(), sellerDetails.getSellerName());
			}
			
			
		}
		else {
			throw new UserNotFoundException(AppConstant.UserIdNotFound);
			
			
		}
		return null;
		
	}
	
	
	
	
	
	

}
