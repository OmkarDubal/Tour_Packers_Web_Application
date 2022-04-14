 package com.example.demo.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tours")
public class Tours {

	@Id
	int t_id;
	
	@Column
	String t_name;
	
	@Column
	String description;
	
	@Column
	Double distance;
	
	@Column
	int days;
	
	@Column
	int total_seats;
	
	@Column
	Double price;
	
	@Column
	Date t_date;

	public Tours() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tours(int t_id, String t_name, String desc, Double distance, int days, int total_seats, Double price,
			Date t_date) {
		super();
		this.t_id = t_id;
		this.t_name = t_name;
		this.description = desc;
		this.distance = distance;
		this.days = days;
		this.total_seats = total_seats;
		this.price = price;
		this.t_date = t_date;
	}

	public int getT_id() {
		return t_id;
	}

	public void setT_id(int t_id) {
		this.t_id = t_id;
	}

	public String getT_name() {
		return t_name;
	}

	public void setT_name(String t_name) {
		this.t_name = t_name;
	}

	public String getDesc() {
		return description;
	}

	public void setDesc(String description) {
		this.description = description;
	}

	public Double getDistance() {
		return distance;
	}

	public void setDistance(Double distance) {
		this.distance = distance;
	}

	public int getDays() {
		return days;
	}

	public void setDays(int days) {
		this.days = days;
	}

	public int getTotal_seats() {
		return total_seats;
	}

	public void setTotal_seats(int total_seats) {
		this.total_seats = total_seats;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Date getT_date() {
		return t_date;
	}

	public void setT_date(Date t_date) {
		this.t_date = t_date;
	}
	
	
	

}