import React from 'react';
import { observer } from 'mobx-react';
import { useState } from 'react';
//AuthStore
import authStore from "../store/authStore"

//Material UI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserRegLog = (props) => {

    const [userInput, setUserInput] = useState({
        username: "",
        email: "",
        password: "",
      });
      const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
      };
    // userChoice={userChoice} setUserChoice={setUserChoice}

    const handleSubmit=(event)=> {
        event.preventDefault();
        console.log(props.userChoice)
        props.userChoice==='signin' ? authStore.signIn(userInput): authStore.signUp(userInput);
        props.closeUserModal();
    }


    return (
        <div>
            <Modal
            open={props.openUserModal}
            onClose={()=>props.closeUserModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box component="form"
                    sx={style}
                    Validate
                    autoComplete="off"
                    >
                    <form onSubmit={handleSubmit}>
                        
                        <PersonIcon/>
                        <TextField
                            required
                            id="filled-required"
                            type="text"
                            label="Username"
                            placeholder="Username"
                            variant="filled"
                            onChange={handleChange}
                        />
                        {props.userChoice ==='signup' &&
                        <>
                        <AlternateEmailIcon/>
                        <TextField
                            required
                            id="filled-required"
                            type="email"
                            label="email"
                            placeholder="email@something.com"
                            variant="filled"
                            onChange={handleChange}
                        />
                        </>
                        }
                        
                        <PasswordIcon/>
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            placeholder="secret code!"
                            type="password"
                            onChange={handleChange}
                            variant="filled"
                        />
                        <Button variant="contained" type="submit">{props.userChoice}</Button>
                        
            
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default observer(UserRegLog)
