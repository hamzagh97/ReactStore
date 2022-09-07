import React, { useState, useReducer } from "react";

const valueReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.val,
        isTouched: state.isTouched,
      };
      break;
    case "INPUT_BLUR":
      return {
        value: state.value,
        isTouched: true,
      };
      break;
    default:
      break;
  }
  return state;
};

const useInput = (validateValue) => {
  const [valueState, dispatchValue] = useReducer(valueReducer, {
    value: "",
    isTouched: false,
  });

  const isValid = validateValue(valueState.value);
  const valueNotValid = !isValid && valueState.isTouched;

  const ValueChangeHandler = (event) => {
    dispatchValue({ type: "USER_INPUT", val: event.target.value });
  };

  const validateValueHandler = () => {
    dispatchValue({ type: "INPUT_BLUR" });
  };

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  // const { isValid: emailIsValid } = valueState;

  // useEffect(() => {
  //   const onTypeDelay = setTimeout(() => {
  //     setFormIsValid(emailIsValid && passwordIsValid);
  //   }, 100);
  //   return () => {
  //     clearTimeout(onTypeDelay);
  //   };
  // }, [emailIsValid, passwordIsValid]);

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onLogin(emailState.value, passwordState.value);
  // };

  //   const [formIsValid, setFormIsValid] = useState(false);

  //   const emailError = <div>please type a valid email</div>;
  //   const passwordError = <div>please type a valid password</div>;

  return {
    value: valueState.value,
    isValid: isValid,
    valueNotValid: valueNotValid,
    valueOnChangeHandler: ValueChangeHandler,
    valueOnBlurHandler: validateValueHandler,
  };
};

export default useInput;
