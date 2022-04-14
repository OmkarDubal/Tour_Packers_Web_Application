package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Contact;
import com.example.demo.Entity.Customer;
import com.example.demo.service.ContactService;
import com.example.demo.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ContactController {

	
	 @Autowired
	    private ContactService contactService;

	    @PostMapping("/contact")
	    public String add(@RequestBody Contact contact){
	    	contactService.saveContact(contact);
	        return "New contact is added";
	    }
}
