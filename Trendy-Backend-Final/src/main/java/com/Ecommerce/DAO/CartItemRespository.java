
package com.Ecommerce.DAO;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Ecommerce.Entity.Cart;
import com.Ecommerce.Entity.CartItem;
import com.Ecommerce.Entity.ProductName;

import jakarta.transaction.Transactional;


public interface CartItemRespository extends JpaRepository<CartItem, Long> {

	 
    @Transactional
    @Modifying
    @Query("DELETE FROM CartItem ci WHERE ci.product.productId = :productId")
    public void deleteByProductId(Long productId);
    

//    @Query("select * from CartItem ci Inner join Cart c on c.cartId = ci.cartId Inner join User u on u.customerId = c.customerId where customerId =:customerId")
//	 public void getTheCartListOfUser(Long customerId);
//    
//    List<CartItem> findByCart(Cart cart);
    
    
    //ci.cartItemId,ci.product,ci.productQuantity
    
    //List<CartItem> findByCartItemId(Long cartItemId);
    
    List<CartItem> findByCart(Cart cart);
    
    List<CartItem> findByProduct(ProductName product);
    
    
}
