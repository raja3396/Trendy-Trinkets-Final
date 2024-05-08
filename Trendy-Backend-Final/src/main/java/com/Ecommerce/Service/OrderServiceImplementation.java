package com.Ecommerce.Service;


import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.OrderRepository;
import com.Ecommerce.Entity.Orders;
import com.Ecommerce.Entity.User;


@Service
public class OrderServiceImplementation implements OrderServiceInterface{
	
	@Autowired
	OrderRepository orderRepository;

	@Override
	public void generateOrderId(User user) {
		
		Orders orders = new Orders();
		
		orders.setCustomer(user);
		orders.setCreatedAt(LocalDate.now());
		
		orderRepository.save(orders);
		
	}

	
	
}
