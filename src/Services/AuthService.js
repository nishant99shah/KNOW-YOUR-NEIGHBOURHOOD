import axios from "axios";

const API_URL = "http://localhost:8080/login";

class AuthService {
  //after login, we need to save the key/token in local storage
  login(users) {
    return axios.post(API_URL,users)
                .then(response => {
                  if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                  }
                  return response.data;
                  
                });
  }

// delete the key
  logout() {
    localStorage.removeItem("user");
  }

  addUser(users) {
    return axios.post("http://localhost:8080/userController/api" ,users);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();