import axios from 'axios'
import { BASE_URL } from '../config/baseURL.tsx'

const baseAxios = axios.create();

baseAxios.defaults.baseURL = BASE_URL;

baseAxios.interceptors.request.use(
    function (config) {
        return config
    }, // function(config)
    function (error) {
        return Promise.reject(error)
    }, // function(error)
) // baseAxios.interceptors.request.use

baseAxios.interceptors.response.use(
    function (response) {
        if (response.status === 200) {
            // console.log('data loaded successfully');
        }

        if (response.status === 201) {
            // console.log('data created    successfully');
        }
        return response;
    }, // function(response)
    function (error) {
        const errorVal = error?.response?.data?.error
        if ([403, 401].includes(error?.response?.status)) {
            // store.dispatch(logoutUser());
        }
        return Promise.reject(errorVal)
    }, // function(error)
) // baseAxios.interceptors.response.use

export default baseAxios