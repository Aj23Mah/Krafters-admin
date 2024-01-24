import { GetRequest } from "../plugins/http"

export const APICategory =()=>{
    return GetRequest('category');
}
export const APIUploadImage =()=>{
    return GetRequest('category/upload-image');
}
export const APIGetImage =()=>{
    return GetRequest('image/get-image');
}