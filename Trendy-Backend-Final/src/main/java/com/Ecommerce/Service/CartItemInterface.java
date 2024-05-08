package com.Ecommerce.Service;

import java.util.List;

import com.Ecommerce.DTO.MessageInfo;
import com.Ecommerce.Entity.CartItem;

//import com.Ecommerce.Entity.CartItem;

public interface CartItemInterface {

      public MessageInfo addProductsToCart(Long productId,Long customerId);
      
	
      public MessageInfo deleteItemsFromCart(Long productId,Long cartId);
      
      public List<CartItem> getAllCartItemBasedOnCustomerId(Long customerId);
	
}
