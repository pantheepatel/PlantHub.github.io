import axios from "axios";
export const plantData=(id)=>{
    console.log('into plantData with id : ',id)
    // const id=2
    return axios.get(`http://127.0.0.1:8000/plantData/${id}/`); //make a request of data and return response of file
}