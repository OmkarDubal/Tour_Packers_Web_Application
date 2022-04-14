package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Customer;
import com.example.demo.Repository.CustomerRepository;



@Service
public class CustomerServiceImpl implements CustomerService {

	
	@Autowired
	private CustomerRepository customerRepository;
	@Override
	public Customer saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer) ;
	}
	
	/*public Customer login(int cust_id,String pwd)
	{
		Customer customer=customerRepository.findByCust_idAndPwd(cust_id,pwd);
		
		return customer;
	}*/
	
	public Object checkLogin(String email,String pwd)
	{
		List<Object[]> l=customerRepository.checkLogin(email,pwd);
		
		if(l.size()==1)
		{
			//System.out.println(l.get(0)[0]+" : "+l.get(0)[1]);
			Customer c2=null;
			Optional<Customer> op=customerRepository.findById((int)l.get(0)[0]);
			try
			{
				c2=op.get();
			}
			catch (Exception e) {
				//e.printStackTrace();
				c2=null;
			}
			return c2;
		}
		else
		{
			return null;
		}
	}
	public Customer getCustomer(int cust_id)
	{
		return customerRepository.findById(cust_id).get();
	}

}
