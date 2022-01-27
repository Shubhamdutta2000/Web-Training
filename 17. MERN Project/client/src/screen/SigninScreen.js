import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import Signup_2 from '../assets/Signup_2.png';
import Signup_3 from '../assets/Signup_3.png'

import { useStyles } from '../styles/LoginScreenStyle';

// Redux
import { userRegister } from '../redux/actions/userAction'
import { useDispatch, useSelector } from "react-redux";

const SignScreen = ({ history }) => {
  const classes = useStyles();
  const isMobile = window.innerWidth <= 880;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //redux
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  //Redirect to Homepage if loggedin
  useEffect((history) => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);


  const submitHandler = (event) => {
    event.preventDefault();
    history.push("/");
    dispatch(userRegister(username, email, password));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={4}  >

        <img src={Signup_3} className={isMobile ? classes.display : classes.image} />
      </Grid>

      <Grid item xs={12} sm={12} md={4} component={Paper} elevation={0} >
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Note Taking App
          </Typography>
          <br />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Your Name"
              name="name"
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to='/' variant="body2">
                  Already Registered ? Login instead
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>

      <Grid item xs={false} sm={false} md={4}  >
        <img src={Signup_2} className={isMobile ? classes.display : classes.image2} />
      </Grid>
    </Grid>
  );
}

export default SignScreen;