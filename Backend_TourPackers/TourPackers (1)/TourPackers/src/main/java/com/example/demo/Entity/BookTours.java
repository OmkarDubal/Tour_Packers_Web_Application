package com.example.demo.Entity;

import java.sql.Date;

public class BookTours 
{
	int booking_id;
	
	int cust_id;
	
	int t_id;
	
	String payment_status;
	
	String booking_status;
	
	Date book_date;
	
	int booked_seats;

	public BookTours() {
		super();
	}

	public BookTours(int booking_id, int cust_id, int t_id, String payment_status, String booking_status,
			Date book_date, int booked_seats) {
		super();
		this.booking_id = booking_id;
		this.cust_id = cust_id;
		this.t_id = t_id;
		this.payment_status = payment_status;
		this.booking_status = booking_status;
		this.book_date = book_date;
		this.booked_seats = booked_seats;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public int getT_id() {
		return t_id;
	}

	public void setT_id(int t_id) {
		this.t_id = t_id;
	}

	public String getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}

	public String getBooking_status() {
		return booking_status;
	}

	public void setBooking_status(String booking_status) {
		this.booking_status = booking_status;
	}

	public Date getBook_date() {
		return book_date;
	}

	public void setBook_date(Date book_date) {
		this.book_date = book_date;
	}

	public int getBooked_seats() {
		return booked_seats;
	}

	public void setBooked_seats(int booked_seats) {
		this.booked_seats = booked_seats;
	}
	
	
	
}
