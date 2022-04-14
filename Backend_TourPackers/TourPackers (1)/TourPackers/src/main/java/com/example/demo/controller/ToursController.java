package com.example.demo.controller;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import javax.persistence.criteria.Path;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.Tours;
import com.example.demo.service.ToursServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ToursController {

	@Autowired
	ToursServices tservice;
	
	
	@GetMapping("/t_all") 
	public List<Tours> getAll() 
	{
		System.out.print("hello"); 
		return tservice.getAll(); 
	}
	 
	
	@PostMapping("/t_add")
	public Tours save(@RequestBody Tours c)
	{
		System.out.print("hello");
		Tours tadd = tservice.add(c);
		System.out.println(tadd.getT_id());
		return tadd;
	}
	
	
	@PostMapping("/saveUpload")
	public Tours saveAndUpload(@RequestPart("data") Tours ct,@RequestPart("file") MultipartFile file)
	{
		//Tours tadd=tservice.add(ct);
		Tours tadd  = tservice.add(ct);
		boolean flag=true;
		try
		{
				byte [] data=file.getBytes();
				Path path=(Path)Paths.get("images//"+tadd.getT_id()+".jpg");
				Files.write( (java.nio.file.Path) path, data,null);
		}
		catch(Exception e)
		{
			flag=false;
	 		}

		if(flag)
		{
			return tadd;
		}
		else
		{
			return null;
		}

	}
}