package com.lithan.kyn.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.kyn.model.Store;
import com.lithan.kyn.service.StoreService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/storeController")
public class StoreController {
	
	@Autowired
	private StoreService storeService;	
	
	//add store
	@PostMapping("/api/addStore")
	public  Store addStore(@RequestBody Store store) {
		return storeService.addStore(store);
	}
	
	//list all stores
	@GetMapping("/api/allStore")
	public List<Store> getAllStore(){	
		return storeService.getAllStore();
	}	
	
	//delete store
	@DeleteMapping(value = "/api/deleteStore/{id}")
	public void deleteStore(@PathVariable Integer id){	
		storeService.deleteStoreById(id);
	}
	
	//find store by id
	@GetMapping(value = "/api/viewStore/{storeId}")
	public Optional<Store> findStoreById(@PathVariable Integer storeId) {
		return storeService.findStoreById(storeId);
	}
	
	//update store by id
	@RequestMapping(value = "/api/updateStore/{storeId}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public Store updateStore(@RequestBody Store store,@PathVariable Integer storeId) {
				Optional<Store> oldStore=storeService.findStoreById(storeId);
				if(oldStore.isPresent())
				{
					Store obj=oldStore.get();
					obj.setName(store.getName());
					obj.setPhoneNumber(store.getPhoneNumber());
					obj.setLocality(store.getLocality());
					return storeService.addStore(obj);					
				}	
				else {	
					return storeService.addStore(store);
				}
			}
	

	
	 //search store by keyword
	 @GetMapping("/api/searchStore/{searchKeyword}") 
	 public List<Store> searchForStores(@PathVariable("searchKeyword") String searchKeyword) {
		 List<Store> stores = storeService.searchStores(searchKeyword); 
		 return stores; 
	 }
}
