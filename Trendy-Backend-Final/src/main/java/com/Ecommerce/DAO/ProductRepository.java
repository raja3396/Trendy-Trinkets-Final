package com.Ecommerce.DAO;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.Ecommerce.Entity.ProductName;
import com.Ecommerce.Entity.Seller;

public interface ProductRepository extends JpaRepository<ProductName, Long> {

	
	public ProductName findByProductId(Long productId);
		
	
    @Query("SELECT p FROM ProductName p WHERE p.categoryType.categoryId = :categoryId")
    public List<ProductName> findByCategoryId(Long categoryId);
    
    
    List<ProductName> findBySeller(Seller seller);
}
