package com.example.demo.service;

import com.example.demo.Entity.Customer;

public interface CustomerService {
	
	public Customer saveCustomer(Customer customer);
	public Object checkLogin(String email,String pwd);
   
}
