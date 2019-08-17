import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import st from "./style.less";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    password: ""
  });
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    }
  }));

  const classes = useStyles();

  const signUp = () => {
    console.log('WORK!')
  }

  return (
    <div className={st.mainContainer}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Username"
          className={classes.textField}
          value={state.name}
          onChange={({ target }) => setState({ ...state, name: target.value })}
          margin="normal"
          placeholder = 'Username'
          variant="outlined"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          className={state.password}
          type="password"
          autoComplete="current-password"
          placeholder = 'Password'
          margin="normal"
          onChange={({ target }) => setState({ ...state, password: target.value })}
          variant="outlined"
          required
        />

        <Button variant="contained" color="primary" className={classes.button} onClick={signUp}>
          Sing Up
        </Button>

      </form>
    </div>
  );
};

export default Login;
