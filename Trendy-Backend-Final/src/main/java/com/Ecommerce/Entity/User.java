package com.Ecommerce.Entity;


import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "Customer")
public class User implements UserDetails{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long customerId;
	
	private String CustomerName;
	
	private String customerEmailId;
	
	private String password;
	
	private long customerPhoneNumber;
	
	private boolean seller;
	
	
    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "updated_at")
    private LocalDate updatedAt;
    
    //@Value("${some.key:USER}")
    @Enumerated(value= EnumType.STRING)
    private Role role;
    

	public User() {
		super();
		this.role = role.USER;
		// TODO Auto-generated constructor stub
	}


	public User(Long customerId, String customerName, String customerEmailId, String password, long customerPhoneNumber,
			boolean seller, LocalDate createdAt, LocalDate updatedAt) {
		super();
		this.customerId = customerId;
		CustomerName = customerName;
		this.customerEmailId = customerEmailId;
		this.password = password;
		this.customerPhoneNumber = customerPhoneNumber;
		this.seller = seller;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}


	public Long getCustomerId() {
		return customerId;
	}


	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}


	public String getCustomerName() {
		return CustomerName;
	}


	public void setCustomerName(String customerName) {
		CustomerName = customerName;
	}


	public String getCustomerEmailId() {
		return customerEmailId;
	}


	public void setCustomerEmailId(String customerEmailId) {
		this.customerEmailId = customerEmailId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public long getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}


	public void setCustomerPhoneNumber(long customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}


	public boolean isSeller() {
		return seller;
	}


	public void setSeller(boolean seller) {
		this.seller = seller;
	}


	public LocalDate getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}


	public LocalDate getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return  List.of(new SimpleGrantedAuthority(role.name()));
	}


	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return getCustomerEmailId();
	}


	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}
	


}

