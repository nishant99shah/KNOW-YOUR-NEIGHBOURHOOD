package com.lithan.kyn.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.kyn.model.Users;
import com.lithan.kyn.repository.UserRepository;
import com.lithan.kyn.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public Users addUser(Users user) {
		return userRepo.save(user);
	}
	


	@Override
	public Users checkuser_pass(String loginemail, String loginpass) {
		// TODO Auto-generated method stub
		
		Users user=userRepo.findByEmail(loginemail);
		
		if(user==null) {
			System.out.println("No User. Login Email is wrong");
			return null;
		}
		
		if(user!=null) {
			String realpass=user.getPassword();
			if(realpass.equals(loginpass)) {
				System.out.println("2nd Method- Password is Match");	
			}else {
				System.out.println("2nd Method- Password is Not Match");
				return null;
			}
		}
		return user;
	}

}
