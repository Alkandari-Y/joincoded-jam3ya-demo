import React from 'react';
import { observer } from 'mobx-react';

//AuthStore
import authStore from "../store/authStore"

//Material UI
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

const UsefAuthForm = (props) => {

    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
        onSubmit: (values) => {
            console.log(values)
            props.userChoice === 'signin' ? authStore.logging("/signin", { username: values.username, password: values.password }) : authStore.logging("/signup", { username: values.username, email: values.email, password: values.password});
            
            props.closeUserModal();
        },
    });

    return (
        <div>
            <Modal
            open={props.openUserModal}
            onClose={()=>props.closeUserModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                    { props.userChoice ==='signup' &&
                    <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                    }
                    <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                    {props.userChoice}
                    </Button>
                </form>
            </Box>
            </Modal>
        </div>
    )
}

export default observer(UsefAuthForm)
