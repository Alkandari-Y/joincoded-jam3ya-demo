import React from 'react';
import { observer } from 'mobx-react';
import { useState } from 'react';
//AuthStore
import authStore from "../store/authStore"

//Material UI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
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


      const onCloseAction = () => {
        setUserInput({
            username: "",
            email: "",
            password: "",
          });
        props.closeUserModal();
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
        props.userChoice ==='signin' ? authStore.logging("/signin", userInput): authStore.logging("/signup", userInput);
        onCloseAction()
    }

    return (
        <div>
            <Modal
            open={props.openUserModal}
            onClose={onCloseAction}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    
                    autoComplete="off"
                    >
                    <form onSubmit={handleSubmit}>
                        <div>
                            <PersonIcon/>
                            <TextField
                                required
                                value={userInput.username}
                                name="username"
                                
                                type="text"
                                label="Username"
                                placeholder="Username"
                                variant="filled"
                                onChange={handleChange}
                            />
                        </div>
                        <br/>
                        {props.userChoice ==='signup' &&
                        <div>
                            <AlternateEmailIcon/>
                            <TextField
                                required
                                value={userInput.email}
                                name="email"
                
                                type="email"
                                label="email"
                                placeholder="email@something.com"
                                variant="filled"
                                onChange={handleChange}
                            />
                        </div>
                        }
                        <br/>
                        <div>
                            <PasswordIcon/>
                            <TextField
                                required
                                value={userInput.password }
                                name="password"
                                
                                label="Password"
                                placeholder="secret code!"
                                type="password"
                                onChange={handleChange}
                                variant="filled"
                            />
                        </div>
                    </form>

                    <button variant="contained" type="submit">{props.userChoice}</button>
                </Box>
            </Modal>
        </div>
    )
}

export default observer(UserRegLog)
