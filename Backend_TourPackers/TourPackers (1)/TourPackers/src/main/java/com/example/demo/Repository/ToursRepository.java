package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Tours;

public interface ToursRepository extends JpaRepository<Tours, Integer>{

}
