package com.Ecommerce.Controller;

import java.util.List;

import com.Ecommerce.DTO.UserDetailsMessageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.Ecommerce.Entity.User;
import com.Ecommerce.Service.UserServiceImplementation;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	UserServiceImplementation serviceImplementation;
	
	@GetMapping("/admin_only/getAllUser")
	public ResponseEntity<List<User>> usersList(){
		return new ResponseEntity<List<User>>(serviceImplementation.getAllUsers(),HttpStatus.OK);
	}
	
    @GetMapping("/demo")
    public ResponseEntity<String> demo() {
        return ResponseEntity.ok("Hello from secured url");
    }

    @GetMapping("/admin_only")
    public ResponseEntity<String> adminOnly() {
        return ResponseEntity.ok("Hello from admin only url");
    }

    @GetMapping("/UserByCusomterId/{customerId}")
    public ResponseEntity<UserDetailsMessageInfo> getUserDetailsByCustomerId(@PathVariable Long customerId){

        return new ResponseEntity<UserDetailsMessageInfo>(serviceImplementation.getUserDetailsByCustomerId(customerId), HttpStatus.OK);
    }
    
    
	

}
