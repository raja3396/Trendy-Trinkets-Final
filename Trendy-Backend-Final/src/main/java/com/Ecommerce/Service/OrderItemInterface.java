package com.Ecommerce.Service;

import java.util.List;

import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.OrderItem;

public interface OrderItemInterface {
	
	

	public MessageInfo OrderProducts(Long productId,Long customerId);
	


	List<OrderItem> getAllOrderItemBasedOnCustomerId(Long customerId);
	
	List<OrderItem> getAllOrdersForCustomers();
} 
