package com.Ecommerce.Service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.CartRepository;
import com.Ecommerce.Entity.Cart;
import com.Ecommerce.Entity.User;

@Service
public class CartServiceImplementation implements CartServiceInterface{
	
	Cart cart;
	
	@Autowired
	CartRepository cartRepository;

	@Override
	public void addCartDetails(User user) {
		
		Cart cart = new Cart();
		
		cart.setCustomer(user);
		cart.setCreatedAt(LocalDate.now());
		cartRepository.save(cart);		
	}

	




}
