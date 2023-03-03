import axios from "axios";

const apiHandler = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});


const Get = (endURL) => {
return apiHandler.get(endURL)
}
const GetById = (endURL, id) => {
return apiHandler.get(`${endURL}/${id}`)
}
const Post = (endURL,body) => {
return apiHandler.post(endURL , body)
}
const Put = (endURL,id,body) => {
return apiHandler.put(`${endURL}/${id}`, body)
}
const Delete = (endURL) => {
return apiHandler.delete(endURL)
}

export {Get, GetById, Post, Put, Delete}
