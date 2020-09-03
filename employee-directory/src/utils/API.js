import axios from "axios";


export default {

    GetEmployees: function() {
        return axios.get('https://randomuser.me/api/?inc=name,phone,email,dob,picture');
    }

};



        