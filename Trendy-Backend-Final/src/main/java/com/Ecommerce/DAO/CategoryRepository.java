package com.Ecommerce.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecommerce.Entity.CategoryType;

public interface CategoryRepository extends JpaRepository<CategoryType,Long>{
	
	
	public CategoryType findByCategoryId(long categoryId);

}
