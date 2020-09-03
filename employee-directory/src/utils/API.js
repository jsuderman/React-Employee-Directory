import axios from "axios";


export default {

    GetEmployees: function() {
        return axios.get("https://generate-people.p.rapidapi.com/generatepeople");
    }

};