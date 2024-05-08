package com.Ecommerce.Entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "OrderItem")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    
//    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "orderId")
    private Orders order;
    
    @ManyToOne
    @JoinColumn(name = "OrderProductId")
    private ProductName product;

    //private int productquantity;
    
    
    private double totalPurchasePrice;
    
    @Column(name = "created_at")
    private LocalDate createdAt;

    
    @Column(name = "updated_at")
    private LocalDate updatedAt;

    
    


	public OrderItem() {
		super();
		// TODO Auto-generated constructor stub
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







	public Long getOrderItemId() {
		return orderItemId;
	}




	public void setOrderItemId(Long orderItemId) {
		this.orderItemId = orderItemId;
	}




	public Orders getOrder() {
		return order;
	}




	public void setOrder(Orders order) {
		this.order = order;
	}




	public ProductName getProduct() {
		return product;
	}




	public void setProduct(ProductName product) {
		this.product = product;
	}




//	public int getProductquantity() {
//		return productquantity;
//	}
//
//
//
//
//	public int setProductquantity(int productquantity) {
//		return this.productquantity = productquantity;
//	}









	public double getTotalPurchasePrice() {
		return totalPurchasePrice;
	}




	public double setTotalPurchasePrice(double totalPurchasePrice) {
		return this.totalPurchasePrice = totalPurchasePrice;
	}

	

   
	
		
    

    // Constructors, getters, and setters
}
