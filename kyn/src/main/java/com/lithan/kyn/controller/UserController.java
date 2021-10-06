package com.lithan.kyn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.kyn.model.Users;
import com.lithan.kyn.service.UserService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping(value="/userController")
public class UserController {
	
	@Autowired
	private UserService userService;

	
	@Autowired 
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/api")
    public Users addUser(@RequestBody Users users) {
        users.setPassword(bCryptPasswordEncoder.encode(users.getPassword()));
            return userService.addUser(users);
    }
}
