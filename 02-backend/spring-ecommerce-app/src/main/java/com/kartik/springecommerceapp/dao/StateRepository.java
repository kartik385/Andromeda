package com.kartik.springecommerceapp.dao;

import com.kartik.springecommerceapp.entity.Country;
import com.kartik.springecommerceapp.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface StateRepository extends JpaRepository<State,Integer> {
    List<State> findByCountryId(@RequestParam("id")int id);
}
