package com.kartik.springecommerceapp.dao;

import com.kartik.springecommerceapp.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "country",path = "countries")
public interface CountryRepository extends JpaRepository<Country,Integer> {
}
