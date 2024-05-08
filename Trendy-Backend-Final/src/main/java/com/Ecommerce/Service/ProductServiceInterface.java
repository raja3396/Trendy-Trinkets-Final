package com.Ecommerce.Service;

import java.util.List;

import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.ProductName;

public interface ProductServiceInterface {

   
  public List<ProductName> getProductsInCart(Long userId);
  
  
  public MessageInfo addProducts(Long categoryID,Long sellerId,ProductName name);
  
  public List<ProductName> getAllProducts();
  
  public List<ProductName> categoryWiseProductsList(Long categoryId);
  
  public ProductName getProductById(Long productId);
  
  public List<ProductName> getAllProductsBasedOnSellerId(Long sellerId);
  
  
  
  
}
