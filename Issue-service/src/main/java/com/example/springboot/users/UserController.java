package com.example.springboot.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")

public class UserController {
	   
	    @Autowired
	    private UserRepository userRepository;
	    @GetMapping("/getusers")
	    List<User> getUsers(){
	        return userRepository.findAll();
	    }
	    
	    @PostMapping("/addUser")
	   User newUser(@RequestBody User newUser) {
	        return userRepository.save(newUser);
	    }
	    @DeleteMapping("/user/{id}")
	    public void deleteUserById(@PathVariable Integer id){
	        userRepository.deleteById(id);
	    }
	    }



