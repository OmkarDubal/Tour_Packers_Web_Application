package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Tours;
import com.example.demo.Repository.ToursRepository;

@Service
public class ToursServices {

		@Autowired
		ToursRepository trepo;
		
		public List<Tours> getAll() 
		 { 
			 return trepo.findAll(); 
		 }
		
		public Tours add(Tours c)
		{
			return trepo.save(c);
		}
		
		public Tours getTours(int t_id)
		{
			return trepo.findById(t_id).get();
		}
}
