import axios from "axios";

const https = axios.create({
    baseURL: "https://financial-project.uz/api",
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        Authorization: "Bearer " + window.localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "*",
        
    }

})

export default https; 