import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecre = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecre.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request stop by interceptors', token);
        /* backend a send kora hoyche  */
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    //interceptor 401 and 403 status
    axiosSecre.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        //for 401 or 403 log out the usr and move the user to the login page
        if (status === 401 || status === 403) {
            logOut()
                .then(() => {
                })
                .catch((error) => {
                    console.log(error);

                })
            navigate('/login')
        }
        console.log('status error int the interceptor', status);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    })

    return axiosSecre;
};

export default useAxiosSecure;