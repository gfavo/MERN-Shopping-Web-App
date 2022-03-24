import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FileBase from 'react-file-base64';
import useStyles from "./styles";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, signUp } from '../../store/actions';

const initialState = {
  name: "",
  email: "", 
  password: "",
  image: "",
};

const Auth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(logIn(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };


  const handleShowPassword = () =>
    setShowPassWord((prevShowPassword) => !prevShowPassword);

  const state = null;
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="name"
                  label="Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Adress"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            { isSignup &&  <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, image: base64 })
            }
          />}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Signup" : "Sign-in"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} color="secondary">
                {isSignup
                  ? "Already have an account? Sign-in!"
                  : "I dont have an account. Sign-up here"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;