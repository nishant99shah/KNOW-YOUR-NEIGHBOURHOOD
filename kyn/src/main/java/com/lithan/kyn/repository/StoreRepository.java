package com.lithan.kyn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lithan.kyn.model.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{
	
	@Query(value = "SELECT c FROM Store c WHERE c.name LIKE '%' || :keyword || '%'"
			+ " OR c.phoneNumber LIKE '%' || :keyword || '%'"
			+ " OR c.locality LIKE '%' || :keyword || '%'")
	public List<Store> search(@Param("keyword") String keyword);

}
