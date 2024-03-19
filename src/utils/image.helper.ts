import {BASE_IMAGE_URL} from '../config/baseURL.jsx';

export const getImageUrl = (img:string)=>{
    return BASE_IMAGE_URL + img;
}