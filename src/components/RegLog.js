import React from 'react';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { useParams } from 'react-router';
//AuthStore
import authStore from "../store/authStore"

//Material UI


const UserRegLog = () => {

    const {formType} = useParams();
    console.log(typeof formType)

    const [userInput, setUserInput] = useState({
        username: "",
        email: "",
        password: "",
      });
      const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
      };
    

    const handleSubmit=(event)=> {
        event.preventDefault();
        
        formType==='signin' ? authStore.logging("/signin", userInput): authStore.logging("/signup", userInput);
        
        setUserInput({
            username: "",
            email: "",
            password: "",
          });
        
    }


    return (
        <div>
                    <form onSubmit={handleSubmit}>

                        <input
                            required
                            value={userInput.username}
                            name="username"
                            id="filled-required"
                            type="text"
                            label="Username"
                            placeholder="Username"
                            
                            onChange={handleChange}
                        />
                        {formType ==='signup' &&
                        <>
                        <input
                            required
                            value={userInput.email}
                            name="email"
                            id="filled-required"
                            // type="email"
                            label="email"
                            placeholder="email@something.com"
                           
                            onChange={handleChange}
                        /></>}
                        <input
                            required
                            value={userInput.password }
                            name="password"
                            id="filled-password-input"
                            label="Password"
                            placeholder="secret code!"
                            type="password"
                            onChange={handleChange}/>
                        <button variant="contained" type="submit">{formType}</button>
                    </form>

                    
                
        </div>
    )
}

export default observer(UserRegLog)
