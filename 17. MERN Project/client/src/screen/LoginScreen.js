import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Login_1 from "../assets/Login_1.png";
import Login_2 from "../assets/Login_2.png";

import { useStyles } from "../styles/LoginScreenStyle";

//Redux
import { userLogin } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function LoginScreen() {
  const history = useHistory();
  const classes = useStyles();
  const isMobile = window.innerWidth <= 880;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // REDUX
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  // redirect to home page if logged in
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userLogin(email, password));
    console.log(email);
    history.push('/')
    //window.location.reload()

  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={4}>
        <img
          src={Login_1}
          className={isMobile ? classes.display : classes.image}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={0}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Note Taking App
          </Typography>
          <br />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="Password-reset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Typography component="h5" className={classes.register_login}>
                  Haven't Registered yet? &nbsp;
                  <Link to="/Signin" variant="body2">
                    Register
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={false} md={3}>
        <img
          src={Login_2}
          className={isMobile ? classes.display : classes.image2}
        />
      </Grid>
    </Grid>
  );
}
