package com.Ecommerce.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ecommerce.DAO.CategoryRepository;
import com.Ecommerce.DAO.ProductRepository;
import com.Ecommerce.DAO.SellerRepository;
import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.CategoryType;
import com.Ecommerce.Entity.ProductName;
import com.Ecommerce.Entity.Seller;
import com.Ecommerce.ExceptionHandling.CategoryIdNotFound;
import com.Ecommerce.ExceptionHandling.ProductNotFoundException;
import com.Ecommerce.ExceptionHandling.SellerNotFoundException;
import com.Ecommerce.ExceptionHandling.SelllerEmptyProductsException;
import com.Ecommerce.Util.AppConstant;

@Service
public class ProductServiceImplementation implements  ProductServiceInterface{
	
	
	
	@Autowired
	ProductRepository  productRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	SellerRepository sellerRepository;

	@Override
	public List<ProductName> getProductsInCart(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MessageInfo addProducts(Long categoryId,Long sellerId,ProductName productRequest) {
	
		Seller seller = sellerRepository.findBySellerId(sellerId);
		if(seller != null) {
			
			if(sellerRepository.existsById(seller.getSellerId())) {
				CategoryType categoryType = categoryRepository.findByCategoryId(categoryId);
				
				if(categoryType != null) {
					if(categoryRepository.existsById(categoryId)) {
						
						ProductName  product =  new ProductName();
						
						product.setProductName(productRequest.getProductName());
						product.setProductImage1(productRequest.getProductImage1());
				        product.setCategoryType(categoryType);
				        product.setProductCost(productRequest.getProductCost());
				        product.setSeller(seller);
				        product.setCreatedAt(LocalDate.now());
				        product.setDescription(productRequest.getDescription());
				        product.setProductQuantity(productRequest.getProductQuantity());
				        
				        productRepository.save(product);
				        
				       
						return new MessageInfo(AppConstant.ProductAddedSuccessfully);
					}
					else {
						
						throw new CategoryIdNotFound(AppConstant.categoryIdNotFound); 
					}
					
				}
				else {

					throw new CategoryIdNotFound(AppConstant.categoryIdNotFound);
					
				}
				
								
			}
			else {

				throw new SellerNotFoundException(AppConstant.SellerNotFound);
			}
						
		}
		else {
			throw new SellerNotFoundException(AppConstant.SellerNotFound);
		}
		
	}

	@Override
	public List<ProductName> getAllProducts() {
		
		return productRepository.findAll();
	}

	@Override
	public List<ProductName> categoryWiseProductsList(Long categoryId) {
		
		if(categoryRepository.existsById(categoryId)) {
			
			List<ProductName> categoryWiseProducts = productRepository.findByCategoryId(categoryId);
			
			return categoryWiseProducts;
		}
		else {
			throw new CategoryIdNotFound(AppConstant.categoryIdNotFound);
		}

	}

	@Override
	public ProductName getProductById(Long productId) {
		
		if(productRepository.existsById(productId)) {
			
			ProductName productDetails =  productRepository.findByProductId(productId);
			
			return productDetails;
			
		}
		else {
			throw new ProductNotFoundException(AppConstant.productIdNotFound);
		}
	}
	

	@Override
	public List<ProductName> getAllProductsBasedOnSellerId(Long sellerId) {
		
		Seller sellerDetails = sellerRepository.findBySellerId(sellerId);
		
		if(sellerDetails != null) {
			
			if(sellerRepository.existsById(sellerId)) {
				
				List<ProductName> produtDetails = productRepository.findBySeller(sellerDetails);
				
				
				
				if(produtDetails.isEmpty()) {
					
					throw new SelllerEmptyProductsException(AppConstant.SellerProdctsEmptyList);
				}
				
				return produtDetails;
				
			}
			else {

				throw new SellerNotFoundException(AppConstant.SellerNotFound);
				
			}
			
		}
		else {
			
			throw new SellerNotFoundException(AppConstant.SellerNotFound);
		}
		
		
	}

	
}
