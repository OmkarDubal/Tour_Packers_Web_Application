package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Contact;
import com.example.demo.Entity.Customer;
import com.example.demo.Repository.ContactRepository;
import com.example.demo.Repository.CustomerRepository;
@Service
public class ContactService {
	
	@Autowired
	private ContactRepository contactRepository;
	public Contact saveContact(Contact contact) {
		// TODO Auto-generated method stub
		return contactRepository.save(contact) ;
	}

}
