package com.Ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Ecommerce.Entity.CategoryType;
import com.Ecommerce.Service.CategoryServiceImplementation;

@CrossOrigin
@RestController
public class CategoryController {
	
	@Autowired
	CategoryServiceImplementation categoryServiceImplementation;
	
	@PostMapping("/category")
	public ResponseEntity<String> addCategory(@RequestBody CategoryType categoryType){
		return new ResponseEntity<String>(categoryServiceImplementation.addCategoryItems(categoryType), HttpStatus.OK);
	}
	
	@GetMapping("/category")
	public ResponseEntity<List<CategoryType>> getAllCategoryDetails(){
		return new ResponseEntity<List<CategoryType>>(categoryServiceImplementation.getAllCategoryTypes(), HttpStatus.OK);
	}

	@GetMapping("/category/{categoryId}")
	public ResponseEntity<CategoryType> getCategoryById(@PathVariable Long categoryId){
		return new ResponseEntity<CategoryType>(categoryServiceImplementation.getCategoryById(categoryId), HttpStatus.OK);
	}

}
