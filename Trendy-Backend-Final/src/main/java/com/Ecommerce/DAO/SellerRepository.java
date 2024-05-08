package com.Ecommerce.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecommerce.Entity.Seller;
import com.Ecommerce.Entity.User;

public interface SellerRepository extends JpaRepository<Seller, Long>{
	
	
	public Seller findBySellerName(String sellerName);
	
	public Seller findBySellerId(Long sellerId);
	
	public Seller findByUser(User user);
	
	


}
