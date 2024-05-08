package com.Ecommerce.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.OrderItemRespository;
import com.Ecommerce.DAO.OrderRepository;
import com.Ecommerce.DAO.ProductRepository;
import com.Ecommerce.DAO.UserRespository;
import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.Cart;
import com.Ecommerce.Entity.CartItem;
import com.Ecommerce.Entity.OrderItem;
import com.Ecommerce.Entity.Orders;
import com.Ecommerce.Entity.ProductName;
import com.Ecommerce.ExceptionHandling.CartIdNotFoundException;
import com.Ecommerce.ExceptionHandling.CartItemEmptyException;
import com.Ecommerce.ExceptionHandling.OrderIdNotFoundException;
import com.Ecommerce.ExceptionHandling.OrderItemEmptyException;
import com.Ecommerce.ExceptionHandling.ProductNotFoundException;
import com.Ecommerce.ExceptionHandling.UserNotFoundException;
import com.Ecommerce.Util.AppConstant;


@Service
public class OrderItemImplementation implements OrderItemInterface{

	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderItemRespository orderItemRespository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	UserRespository userRespository;
	


	@Override
		public MessageInfo OrderProducts(Long productId, Long customerId) {
		
		if(userRespository.existsById(customerId)) {

			UserDetails userDetails =  userRespository.findByCustomerId(customerId);
			
			Orders orderDetails = orderRepository.findByCustomer(userDetails);
			
			if(orderDetails != null) {
				
				if(orderRepository.existsById(orderDetails.getOrderId())) {
					
					if(productRepository.existsById(productId)) {
						
						ProductName product = productRepository.findByProductId(productId);
						
						if(product.getProductCost() == null) {
							
							throw new ProductNotFoundException(AppConstant.ProductCostIssue);
						}
							
							OrderItem orderItemDetails = new OrderItem();
							
							
							orderItemDetails.setOrder(orderDetails);
							orderItemDetails.setCreatedAt(LocalDate.now());
							orderItemDetails.setProduct(product);
							//orderItemDetails.setProductUnitPrice(product.getProductCost());
							//orderItemDetails.setProductquantity(orderItem.getProductquantity());
							double totalPrice = orderItemDetails.setTotalPurchasePrice(product.getProductCost());
							
							orderItemRespository.save(orderItemDetails);
							
							
							return  new MessageInfo(AppConstant.YourOrderedHasSuccessfullyplaced);
						
					}
					else {
						
						throw new ProductNotFoundException(AppConstant.productIdNotFound);
						
					}
					
					
				}
				else {
					
					throw new OrderIdNotFoundException(AppConstant.OrderIdNotFound);
					
				}
			
		    }
			else {
				
				throw new OrderIdNotFoundException(AppConstant.OrderIdNotFound);
					
			}
			
		}
		
		else {
			
			throw new UserNotFoundException(AppConstant.UserIdNotFound);
		}
			
	}


	
	@Override
	public List<OrderItem> getAllOrderItemBasedOnCustomerId(Long customerId) {
		
		if(userRespository.existsById(customerId)) {

			UserDetails userDetails =  userRespository.findByCustomerId(customerId);
			
			Orders orderDetails = orderRepository.findByCustomer(userDetails);
			
			if(orderDetails != null) {
				if(orderRepository.existsById(orderDetails.getOrderId())) {
					
					List<OrderItem> orderItemDetails = orderItemRespository.findByOrder(orderDetails);
					
					if(orderItemDetails.isEmpty()) {
						
						throw new OrderItemEmptyException(AppConstant.OrderItemIsEmpty);
						
					}
					else {

						return orderItemDetails;
						
					}
					
					
				}
					else {
						throw new CartIdNotFoundException(AppConstant.OrderIdNotFound);
					}
				
			}
			else {
				throw new OrderIdNotFoundException(AppConstant.OrderIdNotFound);
			}
			
			
		}
		else {
			throw new UserNotFoundException(AppConstant.userLoginWrongCredentialsInfo);
		}
		
	}



	@Override
	public List<OrderItem> getAllOrdersForCustomers() {
		// TODO Auto-generated method stub
		return orderItemRespository.findAll() ;
	}
	
	
	

	

}
