package com.lithan.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lithan.kyn.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>{
	
	@Query(value="SELECT u FROM Users u WHERE u.email=:email AND u.password=:password")
	public Users login(@Param("email") String email,@Param("password") String password);

	public Users findByEmail(String email);

	public Users findByuserName(String name);

}
