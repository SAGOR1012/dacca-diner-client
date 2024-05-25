import axios from "axios";

const axiosSecre = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSecre;
};

export default useAxiosSecure;