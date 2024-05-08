package com.Ecommerce.DAO;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.Ecommerce.Entity.User;


public interface UserRespository extends JpaRepository<User,Long>{
	
	

    UserDetails findBycustomerEmailId(String customerEmailId);
    
    User findByCustomerEmailId(String customerEmailId);
    
    
    User findByPassword(String password);
    
    User findByCustomerId(Long customerId);
    
    
    
    

    
    
}
