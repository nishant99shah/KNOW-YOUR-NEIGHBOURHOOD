package com.lithan.kyn.service;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.kyn.model.Store;
import com.lithan.kyn.repository.StoreRepository;

@Service
@Transactional
public class StoreServiceImpl implements StoreService{
	
	@Autowired
	private StoreRepository storeRepo;
	
	@Override
	public Store addStore(Store store) {
		
		return storeRepo.save(store);
	}

	@Override
	public List<Store> getAllStore() {

		return storeRepo.findAll();
	}

	@Override
	public Optional<Store> findStoreById(int id) {
		
		return storeRepo.findById(id);
	}

	@Override
	public void deleteStoreById(int id) {
		
		storeRepo.deleteById(id);
		
	}

	@Override
	public List<Store> searchStores(String keyword) {
		
		return storeRepo.search(keyword);
	}
}
