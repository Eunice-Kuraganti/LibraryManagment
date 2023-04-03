package com.example.springboot.users;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springboot.service.UserService;
import com.example.springboot.user.User;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {
	
private static final Logger logger = LogManager.getLogger(UserController.class);
	
    private UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/users")
    public List<User> allUsers() {

        return userService.findAll();
    }
   
    @PostMapping("/adduser")
    public User saveUser(@RequestBody User user){
        return userService.save(user);
    }
    @DeleteMapping("/user/{id}")
    public void deleteUserById(@PathVariable long id){
        userService.deleteUserById(id);
    }
}
