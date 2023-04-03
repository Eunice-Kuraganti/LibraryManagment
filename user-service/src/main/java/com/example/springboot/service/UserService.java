package com.example.springboot.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.springboot.user.User;
import com.example.springboot.user.UserRepository;
@Service
public class UserService {
	private static final Logger logger = LogManager.getLogger(UserService.class);

	@Autowired
	private UserRepository userRepository;


	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	/*public User addUser(User user) {
		if(userRepository.findByUserName(user.getUserName()) != null) {
			logger.error("POST Customer {} already exists.",user.getUserName());
			return null;
		}
		userRepository.save(user);
		if(userRepository.findByUserName(user.getUserName()) == null) {
			logger.error("POST User {} not saved.", user.getUserName());
			return null;
		}
		logger.info("POST Customer {} created.", user.getUserName());
		return user;
	}	
	*/
	/*public User deleteUserById(String username) {
		User user = userRepository.findByUserName(username);
		if(user == null) {
			logger.error("DELETE Customer {} not found.", username);
			return user;
		}
		userRepository.delete(user);
		logger.info("DELETE Customer {} deleted.", username);
		return user;
	}

}*/
	public List<User> findAll() {

        var it = userRepository.findAll();

        var users = new ArrayList<User>();
        it.forEach(e -> users.add(e));

        return users;
    }

	public User save(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	public void deleteUserById(long id) {
		// TODO Auto-generated method stub
		
	}
	

}
