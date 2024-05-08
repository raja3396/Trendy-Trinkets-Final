package com.Ecommerce.Service.SecurityClasses;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.UserRespository;
import com.Ecommerce.DTO.LoginDetails;
import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.Role;
import com.Ecommerce.Entity.User;
import com.Ecommerce.ExceptionHandling.UserAlreadyExistedException;
import com.Ecommerce.ExceptionHandling.UserNotFoundException;
import com.Ecommerce.Service.CartServiceImplementation;
import com.Ecommerce.Service.OrderServiceImplementation;
import com.Ecommerce.Util.AppConstant;

import java.time.LocalDate;
import java.util.List;


@Service
public class AuthenticationService {

    private final UserRespository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    private final AuthenticationManager authenticationManager;

    @Autowired
    CartServiceImplementation cartServiceImplementation;
    
    @Autowired
    OrderServiceImplementation orderServiceImplementation;
    
    @Autowired
    LoginDetails loginDetails;

    

    public AuthenticationService(UserRespository repository, PasswordEncoder passwordEncoder, JwtService jwtService,
			 AuthenticationManager authenticationManager) {
		super();
		this.repository = repository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.authenticationManager = authenticationManager;
	}

	public MessageInfo register(User request) {
		

        // check if user already exist. if exist than authenticate the user
		UserDetails userCheck = repository.findBycustomerEmailId(request.getCustomerEmailId());
		if (userCheck != null) {
			   
			 throw new UserAlreadyExistedException(AppConstant.UserAlreadyExisted);
	    }

        User user = new User();
        user.setCustomerName(request.getCustomerName());
        user.setCustomerEmailId(request.getCustomerEmailId());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCustomerPhoneNumber(request.getCustomerPhoneNumber());
        user.setSeller(request.isSeller());
        user.setRole(request.getRole());
        user.setCreatedAt(LocalDate.now());
        user = repository.save(user);
        cartServiceImplementation.addCartDetails(user);
        orderServiceImplementation.generateOrderId(user);

        String jwt = jwtService.generateToken(user);
//
//        saveUserToken(jwt, user);

        return new MessageInfo(AppConstant.UserRegistratioStatus);

    }

	

    
    
    public LoginDetails authenticate(User request) {
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            request.getCustomerEmailId(),
//                            request.getPassword()
//                    )
//            );
            
            User user = repository.findByCustomerEmailId(request.getCustomerEmailId());
            
            if(user != null) {
            	if(repository.existsById(user.getCustomerId())) {
                	
               	 if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
               		 
                        // Generate JWT
                        String jwt = jwtService.generateToken(user);
                        
                        LoginDetails loginDetails = new LoginDetails();
                        
                        loginDetails.setCustomerId(user.getCustomerId());
                        
                        loginDetails.setCustomerName(user.getCustomerName());
                        
                        loginDetails.setSellerOrNot(user.isSeller());
                        
                        loginDetails.setToken(jwt);
                             
                        loginDetails.setMessageInfo(AppConstant.userLoginInfo);
                        
                        Enum<Role> role = user.getRole();
                        
                        if(role == Role.ADMIN) {
                        	loginDetails.setAdminOrNot(true);
                        }
                        else {
                        	loginDetails.setAdminOrNot(false);
                        }
                        
                        return loginDetails;
                       
                 }
               	 else {
               		 throw new UserNotFoundException(AppConstant.WrongPasswordInfo);
               		 }         
               }
            	else {
            		throw new UserNotFoundException(AppConstant.userLoginWrongCredentialsInfo);
            	}
            	
            }
            
            else {
                
            	throw new UserNotFoundException(AppConstant.userLoginWrongCredentialsInfo);
            }
           
        
    }

}
