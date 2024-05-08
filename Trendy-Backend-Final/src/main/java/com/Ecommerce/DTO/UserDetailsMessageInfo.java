package com.Ecommerce.DTO;

public class UserDetailsMessageInfo {
	
	public Long customerId;
	
	public String customerName;
	
	public String customerEmailId;
	
	public Long mobileNumber;

	public UserDetailsMessageInfo(Long customerId, String customerName, String customerEmailId, Long mobileNumber) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmailId = customerEmailId;
		this.mobileNumber = mobileNumber;
	}
	
	

	public UserDetailsMessageInfo(String customerName, String customerEmailId, Long mobileNumber) {
		super();
		this.customerName = customerName;
		this.customerEmailId = customerEmailId;
		this.mobileNumber = mobileNumber;
	}



	public UserDetailsMessageInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmailId() {
		return customerEmailId;
	}

	public void setCustomerEmailId(String customerEmailId) {
		this.customerEmailId = customerEmailId;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	
	
	

}
