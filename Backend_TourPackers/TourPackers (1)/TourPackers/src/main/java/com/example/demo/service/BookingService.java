package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Booking;
import com.example.demo.Repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository brepo;
	
	public List<Booking> getAll() 
	 { 
		 return brepo.findAll(); 
	 }
	
	public Booking add(Booking b)
	{
		return brepo.save(b);
	}

}


