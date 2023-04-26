import React from "react";
import { NewExpence } from "./NewExpence";
import { Login } from "./Login";
import { useState } from "react";
import styled from "styled-components";
import { Users } from "./Users";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(false);

  const openLogin = () => {
    setIsLogin(true);
    localStorage.setItem("USER", JSON.stringify(true));
  };
  const logoutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("USER");
    setUsers(false);
  };
  const showUserHandler = () => {
    setUsers(true);
  };
  const showExpencesHandler = () => {
    setUsers(false);
  };
  const loginState = !users && isLogin;
  const showUser = users && isLogin;
  return (
    <header>
      {isLogin ? (
        <DivStyled>
          <button onClick={showExpencesHandler}>Expenses</button>
          <button onClick={showUserHandler}>Users</button>
          <button onClick={logoutHandler}>Logout</button>
        </DivStyled>
      ) : null}
      {!isLogin && <Login openLogin={openLogin} />}
      {loginState && <NewExpence />}
      {showUser && <Users />}
    </header>
  );
};

const DivStyled = styled.div`
  width: 155.5%;
  height: 50px;
  display: flex;
  justify-content: end;
  background-color: red;
  align-items: center;
  gap: 30px;
  margin: -100px 0 100px -250px;
  button {
    width: 150px;
    height: 30px;
    background-color: pink;
    border: none;
  }
`;
