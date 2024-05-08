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


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Seller")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sellerId;

    private String sellerName;

    private String GstNo;
    
    private long sellerPhoneNumber;
    
    @JsonIgnore
	@OneToOne
	@JoinColumn(name  = "user_id",referencedColumnName = "customerId")
	private User user;

	
    @JsonIgnore
    @Column(name = "created_at")
    private LocalDate createdAt;

    @JsonIgnore
    @Column(name = "updated_at")
    private LocalDate updatedAt;

	public Seller() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Seller(Long sellerId, String sellerName, String gstNo, long sellerPhoneNumber, 
			LocalDate createdAt, LocalDate updatedAt) {
		super();
		this.sellerId = sellerId;
		this.sellerName = sellerName;
		GstNo = gstNo;
		this.sellerPhoneNumber = sellerPhoneNumber;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getSellerId() {
		return sellerId;
	}

	public void setSellerId(Long sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getGstNo() {
		return GstNo;
	}

	public void setGstNo(String gstNo) {
		GstNo = gstNo;
	}

	public long getSellerPhoneNumber() {
		return sellerPhoneNumber;
	}

	public void setSellerPhoneNumber(long sellerPhoneNumber) {
		this.sellerPhoneNumber = sellerPhoneNumber;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


    
   
}
