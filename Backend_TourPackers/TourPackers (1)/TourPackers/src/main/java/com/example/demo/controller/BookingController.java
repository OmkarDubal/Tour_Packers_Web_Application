package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.BookTours;
import com.example.demo.Entity.Booking;
import com.example.demo.Entity.Customer;
import com.example.demo.Entity.Tours;
import com.example.demo.service.BookingService;
import com.example.demo.service.CustomerService;
import com.example.demo.service.CustomerServiceImpl;
import com.example.demo.service.ToursServices;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingController {
	
	@Autowired
	BookingService bservice;
	@Autowired
	CustomerServiceImpl cservice;
	@Autowired
	ToursServices tservice;
	
	@GetMapping("/b_all")
	public List<Booking> getAll() 
	  {
		  System.out.print("hello"); 
		  return bservice.getAll(); 
	  }	
	
	@PostMapping("/book")
	public Booking save(@RequestBody Booking b) throws Exception
	{
		/*Customer c= cservice.getCustomer(b.getCust_id());
		Tours t=tservice.getTours(b.getT_id());
		
		Booking book=new Booking(c,t,b.getPayment_status(),b.getBooking_status(),b.getBook_date(),b.getBooked_seats());
		
		return bservice.add(book);
//		Booking booked = bservice.add(b);
//		
//		System.out.println(booked.getBooking_id());
//		return booked;*/
		
		return bservice.add(b);
	}
	
}