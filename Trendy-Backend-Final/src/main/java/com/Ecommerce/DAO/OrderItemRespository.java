package com.Ecommerce.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecommerce.Entity.OrderItem;
import com.Ecommerce.Entity.Orders;
import com.Ecommerce.Entity.ProductName;

import java.util.List;


public interface OrderItemRespository extends JpaRepository<OrderItem,Long>{
	
	List<OrderItem> findByOrder(Orders order);
	
	List<OrderItem> findByProduct(ProductName product);

}
