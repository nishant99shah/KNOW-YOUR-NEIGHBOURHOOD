import axios from 'axios';
import authHeader from './authHeader';
const ADD_STORE_URL = "http://localhost:8080/storeController/api/addStore";
const LIST_STORE_URL = "http://localhost:8080/storeController/api/allStore";
const DELETE_STORE_URL = "http://localhost:8080/storeController/api/deleteStore";
const UPDATE_STORE_URL = "http://localhost:8080/storeController/api/updateStore";
const SEARCH_STORE_URL = "http://localhost:8080/storeController/api/searchStore";
const VIEW_STORE_URL = "http://localhost:8080/storeController/api/viewStore";

class StoreService {

    addStore(store) {
        return axios.post(ADD_STORE_URL, store,  {headers:authHeader()});
    }

    allStore() {
        return axios.get(LIST_STORE_URL,{headers:authHeader()});
    }

    deleteStore(id) {
        return axios.delete(DELETE_STORE_URL + '/' + id,{headers:authHeader()});
    }

    updateStore(id, store) {
        return axios.put(UPDATE_STORE_URL + '/' + id, store,{headers:authHeader()});
    }

    searchStore(searchKeyword){
        return axios.get(SEARCH_STORE_URL + '/' + searchKeyword, {headers:authHeader()});
    }

    viewStore(id) {
        return axios.get(VIEW_STORE_URL + '/' + id,{headers:authHeader()});
    }
}

export default new StoreService()