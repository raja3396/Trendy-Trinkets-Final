package com.Ecommerce.Service;

import java.util.List;

import com.Ecommerce.ExceptionHandling.UserNotFoundException;
import com.Ecommerce.Util.AppConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.UserRespository;
import com.Ecommerce.DTO.UserDetailsMessageInfo;
import com.Ecommerce.Entity.User;


@Service
public class UserServiceImplementation implements UserServiceInterface{
	
	
	@Autowired
	UserRespository respository;
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Override
	public List<User> getAllUsers() {
		
		return respository.findAll();
	}

	@Override
	public List<UserDetailsMessageInfo> getAllUsersForAdmin() {
		// TODO Auto-generated method stub
		
		UserDetailsMessageInfo detailsMessageInfo = new UserDetailsMessageInfo();
		
		List<User> listOfUsers = respository.findAll();
		
		for (User user : listOfUsers) {
			
			
			
		}
		
		
		return null;
	}

	public UserDetailsMessageInfo getUserDetailsByCustomerId(Long customerId) {

		User userDetails = respository.findByCustomerId(customerId);

		if(userDetails != null) {


			return new UserDetailsMessageInfo(userDetails.getCustomerId(), userDetails.getCustomerName(),userDetails.getCustomerEmailId(),userDetails.getCustomerPhoneNumber());
		}

		else {
			throw new UserNotFoundException(AppConstant.UserIdNotFound);
		}
	}




}
