package com.Ecommerce.Service;

import java.util.List;

import com.Ecommerce.Entity.CategoryType;

public interface CategoryServiceInterface {
	
	
	public String addCategoryItems(CategoryType categoryType);
	
	       
	public List<CategoryType> getAllCategoryTypes();


	public CategoryType getCategoryById(Long categoryId);

}
