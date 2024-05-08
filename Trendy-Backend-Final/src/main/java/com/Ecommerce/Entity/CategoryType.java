package com.Ecommerce.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CategoryType {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long categoryId;
	
	private String categoryName;
	
	private String categoryImage;
	
	@Column(name = "created_at")
    private LocalDate createdAt;
     
    @Column(name = "updated_at")
    private LocalDate updatedAt;
 

	public CategoryType() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CategoryType(long categoryId, String categoryName, String categoryImage, LocalDate createdAt,
			LocalDate updatedAt) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.categoryImage = categoryImage;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}



	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryImage() {
		return categoryImage;
	}

	public void setCategoryImage(String categoryImage) {
		this.categoryImage = categoryImage;
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
