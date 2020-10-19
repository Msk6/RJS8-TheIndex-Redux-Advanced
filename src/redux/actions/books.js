import {SET_BOOKS} from "./actionTypes"
import axios from "axios"


export const fetchBooks = () => {
    const instance = axios.create({
        baseURL: "https://the-index-api.herokuapp.com"
      });
    return async dispatch => {
        try{
            const response = await instance.get("/api/books/")
            const data = response.data
            dispatch({
                type: SET_BOOKS,
                payload: data
            })
        } catch (err){
            console.error("Somthing error inside you are in catch block")
        }
    }
}