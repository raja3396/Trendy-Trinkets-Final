package com.Ecommerce.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.Ecommerce.Entity.Cart;

public interface CartRepository extends JpaRepository<Cart,Long>{

	public Cart findByCartId(Long cartId);
	
	Cart findByCustomer(UserDetails userDetails);
	
	
	
}
