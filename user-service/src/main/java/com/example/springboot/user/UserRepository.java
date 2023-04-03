package com.example.springboot.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends JpaRepository<User,Integer> {

  Optional<User> findByEmail(String email);






  
}
