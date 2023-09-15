import axios from "axios";

// api for list view of plant list page
export const plantList=(page)=>{
    console.log('page : ',page)
    return axios.get(`http://127.0.0.1:8000/data&page=${page}/`);
    // return axios.get(`http://127.0.0.1:8000/data&page=${page}/`);
}
// http://127.0.0.1:8000/data&page=0

// this is the api that will get all the required details of plant with id
export const plantDataService=(id)=>{
    console.log('into plantData with id : ',id)
    return axios.get(`http://127.0.0.1:8000/plantData/${id}/`); //make a request of data and return response of file
}