import React, { useState } from "react";
import classes from "./CartForm.module.css";
import Input from "../../UI/Input/loginInput";
import Button from "../../UI/Button/Button";
import useInput from "../../../hooks/use-Input";

const CartForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    valueNotValid: nameIsNotValid,
    valueOnChangeHandler: nameOnChangeHandler,
    valueOnBlurHandler: nameOnBlurHandler,
  } = useInput((value) => value >= 3);

  const nameError = <div>Please enter a valid name</div>;

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueNotValid: emailIsNotValid,
    valueOnChangeHandler: emailOnChangeHandler,
    valueOnBlurHandler: emailOnBlurHandler,
  } = useInput((value) => value >= 3);

  const emailError = <div>Please enter a valid name</div>;

  const {
    value: postaclCodeValue,
    isValid: postaclCodeIsValid,
    valueNotValid: postaclCodeIsNotValid,
    valueOnChangeHandler: postalCodeOnChangeHandler,
    valueOnBlurHandler: postalCodeOnBlurHandler,
  } = useInput((value) => value >= 3);

  const postalCodeError = <div>Please enter a valid name</div>;

  const {
    value: streetValue,
    isValid: streetIsValid,
    valueNotValid: streetIsNotValid,
    valueOnChangeHandler: streetOnChangeHandler,
    valueOnBlurHandler: streetOnBlurHandler,
  } = useInput((value) => value >= 3);

  const streetError = <div>Please enter a valid name</div>;

  const onConfirmHandle = (e) => {
    e.preventDefault();
    props.onAddOrder({ nameValue, emailValue, postaclCodeValue, streetValue });
  };

  return (
    <form className={classes["order-form"]}>
      <Input
        id="name"
        type="text"
        lable="Name"
        value={nameValue}
        onChange={nameOnChangeHandler}
        onBlur={nameOnBlurHandler}
      />
      {nameIsNotValid && nameError}
      <Input
        id="email"
        type="email"
        lable="E-mail"
        value={emailValue}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {emailIsNotValid && emailError}
      <Input
        id="Postal Code"
        type="text"
        lable="Postal Code"
        value={postaclCodeValue}
        onChange={postalCodeOnChangeHandler}
        onBlur={postalCodeOnBlurHandler}
      />
      {postaclCodeIsNotValid && postalCodeError}
      <Input
        id="email"
        type="text"
        lable="Street"
        value={streetValue}
        onChange={streetOnChangeHandler}
        onBlur={streetOnBlurHandler}
      />
      {streetIsNotValid && streetError}
      <div className={classes.actions}>
        <Button
          type="submit"
          className={classes["button--alt"]}
          onClick={props.onCloseForm}
        >
          Close
        </Button>
        <Button type="submit" className={classes.btn} onClick={onConfirmHandle}>
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default CartForm;
