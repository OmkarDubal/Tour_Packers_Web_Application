package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contact")
public class Contact {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cont_id;
	@Column
	private String name;

	@Column
	private String email;
	@Column
	private String number;
	@Column
	private String subject;
	@Column
	private String message;
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Contact(int cont_id, String name, String email, String number, String subject, String message) {
		super();
		this.cont_id = cont_id;
		this.name = name;
		this.email = email;
		this.number = number;
		this.subject = subject;
		this.message = message;
	}
	public int getCont_id() {
		return cont_id;
	}
	public void setCont_id(int cont_id) {
		this.cont_id = cont_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Contact [cont_id=" + cont_id + ", name=" + name + ", email=" + email + ", number=" + number
				+ ", subject=" + subject + ", message=" + message + "]";
	}
	
	
}
