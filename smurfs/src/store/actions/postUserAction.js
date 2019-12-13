import axios from "axios"
export const POST_USER_START = "POST_USER_START"
export const POST_USER_SUCCESS = "POST_USER_SUCCESS"
export const POST_USER_FAILURE = "POST_USER_FAILURE"

export const postUser = (data) => dispatch => {
    console.log("Post User got activated in action")
    dispatch({type: "POST_USER_START"});
    axios
        .post(`http://localhost:3333/smurfs`, data)
        .then(res => {
            console.log("Post User Success Response Data", res.data)
            dispatch({type: "POST_USER_SUCCESS", payload: res.data})
        })
        .catch(err => dispatch({type: "POST_USER_FAILURE", payload: err.message}))
}