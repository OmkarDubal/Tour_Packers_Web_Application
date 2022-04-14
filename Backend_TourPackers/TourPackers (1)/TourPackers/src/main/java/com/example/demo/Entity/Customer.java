package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cust_id;
	@Column
	private String pwd;

	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String email;
	@Column
	private String address;
	@Column
	private String city;
	@Column
	private String state;

	@Column
	private int zip;

	@Column
	private long mobile;
    
	

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(int cust_id, String pwd, String fname, String lname, String email, String address, String city,
			String state, int zip, long mobile) {
		super();
		this.cust_id = cust_id;
		this.pwd = pwd;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.mobile = mobile;
		
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	
	
	@Override
	public String toString() {
		return "Customer [cust_id=" + cust_id + ", pwd=" + pwd + ", fname=" + fname + ", lname=" + lname + ", email="
				+ email + ", address=" + address + ", city=" + city + ", state=" + state + ", zip=" + zip + ", mobile="
				+ mobile  + "]";
	}

	
}