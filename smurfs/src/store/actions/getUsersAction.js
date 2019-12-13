import axios from "axios"
export const FETCH_USER_START = "FETCH_USER_START"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

export const getUser = () => dispatch => {
    dispatch({type: "FETCH_USER_START"});
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log("Fetch User Success Response Data", res.data)
            dispatch({type: "FETCH_USER_SUCCESS", payload: res.data})
        })
        .catch(err => dispatch({type: "FETCH_USER_FAILURE", payload: err.message}))
}