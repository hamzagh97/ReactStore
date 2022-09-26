import React, { useState, useEffect } from "react";
import Card from "../components/UI/Card/Card";
import classes from "./LoginPage.module.css";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/loginInput";
import useInput from "../hooks/use-Input";
import { Link } from "react-router-dom";

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueNotValid: emailIsNotValid,
    valueOnChangeHandler: emailChangeHandler,
    valueOnBlurHandler: validateEmailHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    valueNotValid: passwordIsNotValid,
    valueOnChangeHandler: passwordChangeHandler,
    valueOnBlurHandler: validatePasswordHandler,
  } = useInput((value) => value.length > 5);

  const [formIsValid, setFormIsValid] = useState(false);

  // const { isValid: emailIsValid } = emailState;
  // const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const onTypeDelay = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 100);
    return () => {
      clearTimeout(onTypeDelay);
    };
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailValue, passwordValue);
  };

  const emailError = <div>please type a valid email</div>;
  const passwordError = <div>please type a valid password</div>;

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="text"
          lable="E-mail"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        {emailIsNotValid && emailError}
        <Input
          id="password"
          type="password"
          lable="Password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {passwordIsNotValid && passwordError}
        <div className={classes.actions}>
          <Link to="/home">
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default Login;
