package com.Ecommerce.Service;


import java.time.LocalDate;
import java.util.List;

import com.Ecommerce.ExceptionHandling.CategoryIdNotFound;
import com.Ecommerce.Util.AppConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.CategoryRepository;
import com.Ecommerce.Entity.CategoryType;

@Service
public class CategoryServiceImplementation implements CategoryServiceInterface{
	
	@Autowired
	CategoryRepository categoryRepository;
	
	
	

	@Override
	public String addCategoryItems(CategoryType categoryType) {
		// TODO Auto-generated method stub
		
		CategoryType category = new CategoryType();
		
		category.setCategoryName(categoryType.getCategoryName());
		category.setCategoryImage(categoryType.getCategoryImage());
		category.setCreatedAt(LocalDate.now());
		
		categoryRepository.save(category);
		categoryRepository.findByCategoryId(1);
		
		return "Category added successfully";
	}




	@Override
	public List<CategoryType> getAllCategoryTypes() {
		
		return categoryRepository.findAll();
	}

	@Override
	public CategoryType getCategoryById(Long categoryId) {
		CategoryType category = categoryRepository.findByCategoryId(categoryId);
		if(category!=null)
		{
			return category;
		}
		else {
			throw new CategoryIdNotFound(AppConstant.categoryIdNotFound);
		}
	}


//	@Override
//	public List<ProductName> categoryWiseProductsList() {
//		// TODO Auto-generated method stub
//		return null;
//	}


}
