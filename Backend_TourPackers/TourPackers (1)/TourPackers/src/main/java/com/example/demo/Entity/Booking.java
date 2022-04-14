package com.example.demo.Entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int booking_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "cust_id")
	Customer cust_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name= "t_id")
	Tours t_id;
	
	@Column
	String payment_status;
	
	@Column
	String booking_status;
	
	@Column
	Date book_date;
	
	@Column
	int booked_seats;

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(int booking_id, Customer cust_id, Tours t_id, String payment_status, String booking_status, Date book_date,
			int booked_seats) {
		super();
		this.booking_id = booking_id;
		this.cust_id = cust_id;
		this.t_id = t_id;
		this.payment_status = payment_status;
		this.booking_status = booking_status;
		this.book_date = book_date;
		this.booked_seats = booked_seats;
	}
	
	public Booking(Customer cust_id, Tours t_id, String payment_status, String booking_status, Date book_date,
			int booked_seats) {
		super();
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

	public Customer getCust_id() {
		return cust_id;
	}

	public void setCust_id(Customer cust_id) {
		this.cust_id = cust_id;
	}

	public Tours getT_id() {
		return t_id;
	}

	public void setT_id(Tours t_id) {
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