package com.example.demo.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.Entity.Customer;
import com.example.demo.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class CustomerController {
	
	 @Autowired
	    private CustomerService customerService;

	    @PostMapping("/add")
	    public String add(@RequestBody Customer customer){
	        customerService.saveCustomer(customer);
	        return "New customer is added";
	    }
	    
	    @PostMapping("/checkLogin")
		public Object checkLogin(@RequestBody Customer c)
		{
	    	System.out.println(c);
			return customerService.checkLogin(c.getEmail(),c.getPwd());
		}
	  
	    
	  

}
