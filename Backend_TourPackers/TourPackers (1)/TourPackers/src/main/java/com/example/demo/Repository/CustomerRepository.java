package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	//Customer findByCust_idAndPwd(int cust_id, String pwd);

	@Query("select c1.cust_id,c1.email from Customer c1 where email= :email and pwd= :pwd")
	public List<Object[]> checkLogin(String email,String pwd);

	

}
