package com.Ecommerce.Service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.UserRespository;

@Service
public class UserDetailsServiceSecurityImp  implements UserDetailsService{
	
	
	
	private UserRespository userRespository;

	
	
	public UserDetailsServiceSecurityImp(UserRespository userRespository) {
		super();
		this.userRespository = userRespository;
	}



	@Override
	public UserDetails loadUserByUsername(String customerEmailId) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return userRespository.findBycustomerEmailId(customerEmailId);
	}

}
