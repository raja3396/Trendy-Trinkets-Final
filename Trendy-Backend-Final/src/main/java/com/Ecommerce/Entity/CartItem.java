package com.Ecommerce.Entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class CartItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cartItemId;
	
	//@JsonIgnore
	@ManyToOne
    @JoinColumn(name = "CartProduct_id")
    private ProductName product;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "cartId")
	private Cart cart;
	    
//	@ManyToOne
//	@JoinColumn(name = "customerId",referencedColumnName = "customerId")
//	private User user;

    //private int productQuantity;
    
    
    private double TotalPurchasePrice;

	    	
    private LocalDate createdAt;

    
    private LocalDate updatedAt;
    
    
	public CartItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	



	public Long getCartItemId() {
		return cartItemId;
	}	


	public void setCartItemId(Long cartItemId) {
		this.cartItemId = cartItemId;
	}





	public Cart getCart() {
		return cart;
	}


	public void setCart(Cart cart) {
		this.cart = cart;
	}

//
//	public int getProductQuantity() {
//		return productQuantity;
//	}
//
//
//	public void setProductQuantity(int productQuantity) {
//		this.productQuantity = productQuantity;
//	}


	public double getTotalPurchasePrice() {
		return TotalPurchasePrice;
	}


	public void setTotalPurchasePrice(double totalPurchasePrice) {
		TotalPurchasePrice = totalPurchasePrice;
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


	public ProductName getProduct() {
		return product;
	}


	public void setProduct(ProductName product) {
		this.product = product;
	}


     
	
    
    

}
