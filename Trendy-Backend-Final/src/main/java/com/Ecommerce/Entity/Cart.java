package com.Ecommerce.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "ShoppingCart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    @OneToOne
    @JoinColumn(name = "customerId")
    private User customer;


    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "updated_at") 
    private LocalDate updatedAt;

	public Cart() {
		super();
	}
	
	

	public Cart(Long cartId, User customer, LocalDate createdAt, LocalDate updatedAt) {
		super();
		this.cartId = cartId;
		this.customer = customer;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}



	public Long getCartId() {
		return cartId;
	}



	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}



	public User getCustomer() {
		return customer;
	}



	public void setCustomer(User customer) {
		this.customer = customer;
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
	
	 

	    
}
