import React, {useState} from "react";
import {connect} from 'react-redux';
import {getUser} from "../store/actions/getUsersAction";
import {postUser} from "../store/actions/postUserAction";
import Loader from "react-loader-spinner";
import styled from 'styled-components';
const Container = styled.div `
    text-align: center;
    button {
        max-width: 100%;
        width: 250px;
        margin: 20px 0;
        padding: 12px 20px;
        border-style: none;
        background-color: #457B9D;
        box-shadow: 0px 2px 2px lightgray;
        font-size: 25px;
        font-weight: 500;
        color: #F8F9F7;
        cursor: pointer;
        outline: none;
        -webkit-appearance: none;
        display: flex;
        align-self: center;
    }
`;
const StyledForm = styled.form`
width: 50%;
height: 70vh;
margin: auto 100px;
padding: 32px;
font-weight: bold;
background-color: #F8F9F7;
color: #223F68;
box-shadow: 0 0 10px 5px lightgray;
display: flex;
flex-direction: column;
justify-content: space-evenly;

input {
    margin-bottom: 28px;
    padding: 0.5rem;
    font-size: 16px;
    width: 96%;
    display: block;
    color: #223F68;
}
label {
    display: flex;
    text-align: start;
    justify-content: end;
    
}
button {
  max-width: 100%;
  width: 250px;
  margin: 20px 0;
  padding: 12px 20px;
  border-style: none;
  background-color: #457B9D;
  box-shadow: 0px 2px 2px lightgray;
  font-size: 25px;
  font-weight: 500;
  color: #F8F9F7;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  display: flex;
  align-self: center;
}
`;

const Smurfs = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        age: 0,
        height: ""
      });
      // stores real time change in the form input
      const changeHandler = event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(event.target.value);
      };
  
      // sends form data to state via the state function passed down 
      const submitForm = event => {
        event.preventDefault();
        setFormData({ name: "", age: 0, height: "",});
        props.postUser(formData)
      }


    return (
        <Container>
            <h1>Smurfs are Here! </h1>
            {!props.userList && !props.isFetching && <p>Go ahead! Fetch a Smurf!</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
            )}
            {props.userList &&  (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={5000}/>
            ) && props.userList.map(user => {
                return(
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.height}</h2>
                        <h3>{user.age}</h3>
                    </div>
                )
            })}
            <button onClick={props.getUser}>GET SMURFED</button>
            <StyledForm onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
                <input 
                    name="name" 
                    id="name" 
                    type="text" 
                    placeholder="name..." 
                    onChange={changeHandler}
                    value={formData.name}
                    required/>
                <label htmlFor="age">age</label>
                <input 
                    name="age" 
                    id="age" 
                    type="number" 
                    placeholder="age..." 
                    onChange={changeHandler}
                    value={formData.age}
                    required/>
                <label htmlFor="height">height</label>
                <input 
                    name="height" 
                    id="height" 
                    type="text" 
                    placeholder="height..." 
                    onChange={changeHandler}
                    value={formData.height}
                    required/>
                <label htmlFor="name">Name</label>
                <button type="submit" >Add Smurf</button>
            </StyledForm>
                
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
        userList: state.userList,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getUser, postUser})(Smurfs)





