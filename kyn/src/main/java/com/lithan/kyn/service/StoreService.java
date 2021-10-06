package com.lithan.kyn.service;

import java.util.List;
import java.util.Optional;

import com.lithan.kyn.model.Store;


public interface StoreService {
	
	public Store addStore(Store store);
	public List<Store> getAllStore();
	public Optional<Store> findStoreById(int id);
	public void deleteStoreById(int id);
	public List<Store> searchStores(String keyword);
	
}
