import axios from 'axios';

const REGISTER_BASE_URL = "http://localhost:8080/userController/api/register";
const LOGIN_BASE_URL = "http://localhost:8080/login";


class UserService {

    addUser(users){
        return axios.post(REGISTER_BASE_URL, users);
    }


    login(users){
        return axios.post(LOGIN_BASE_URL, users);
    }

}

export default new UserService()