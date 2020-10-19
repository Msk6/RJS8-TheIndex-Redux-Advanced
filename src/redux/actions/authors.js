import {SET_AUTHORS, SELECT_AUTHOR} from "./actionTypes"
import axios from "axios"


export const fetchAuthors = () => {
    const instance = axios.create({
        baseURL: "https://the-index-api.herokuapp.com"
      });
    return async dispatch => {
        try{
            const response = await instance.get("/api/authors/")
            const data = response.data
            dispatch({
                type: SET_AUTHORS,
                payload: data
            })
        } catch (err){
            console.error("Somthing error inside you are in catch block")
        }
    }
}

