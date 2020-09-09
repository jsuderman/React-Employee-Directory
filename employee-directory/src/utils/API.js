import axios from "axios";

const url = 'https://randomuser.me/api/';

export default {

    GetEmployees: function() {
        return axios.get('https://randomuser.me/api/?inc=name,phone,email,dob,picture');
    },

    GetMultiEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=10');
    }
    

};



        