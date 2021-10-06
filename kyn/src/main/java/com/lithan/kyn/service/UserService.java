package com.lithan.kyn.service;

import com.lithan.kyn.model.Users;

public interface UserService {

	public Users addUser(Users user);
	
	public Users checkuser_pass(String loginemail, String loginpass);


}
