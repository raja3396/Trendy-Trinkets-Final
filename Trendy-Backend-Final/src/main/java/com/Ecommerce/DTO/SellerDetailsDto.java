package com.Ecommerce.DTO;

public class SellerDetailsDto {
	
	public Long sellerId;
	
	public String sellerName;

	public SellerDetailsDto(Long sellerId, String sellerName) {
		super();
		this.sellerId = sellerId;
		this.sellerName = sellerName;
	}

	public Long getSellerId() {
		return sellerId;
	}

	public void setSellerId(Long sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}


	
	
	

}
