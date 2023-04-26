import React from "react";
import styled from "styled-components";
export const Login = ({ openLogin }) => {
  return (
    <>
      <DivStyled></DivStyled>
      <FormStyled>
        <label htmlFor="">E-Mail</label>
        <input type="email" />

        <label htmlFor="">Password</label>
        <input type="password" />
      <button onClick={openLogin}>Login</button>
      </FormStyled>
    </>
  );
};
const DivStyled = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  background-color: red;
  align-items: center;
  gap: 30px;
  margin-top: -100px;
`;
const FormStyled = styled.form`
width: 79.9rem;
margin-top: 100px;
  display: flex;
  flex-direction: column;
  /* background-color: #fff; */
  align-items: center;

`;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React, { useState } from "react";
// // import Buttons from "../UI/Button";
// import { useEffect } from "react";
// import styled from "styled-components";
// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
//   useEffect(() => {
//     setFormIsValid(
//       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//     );
//     setFormIsValid(
//       enteredPassword.trim().length > 6 && enteredEmail.includes("@")
//     );
//   }, [enteredEmail, enteredPassword]);
//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };
//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);
//   };
//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes("@"));
//   };
//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };
//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };
//   return (
//     <>
//       <LoginDiv></LoginDiv>
//       <LoginCard>
//         <form onSubmit={submitHandler}>
//           <ControlContainer>
//             <ControlLabel htmlFor="email">E-Mail</ControlLabel>
//             {emailIsValid === false ? (
//               <ControlInput
//                 style={{ borderColor: "red", background: "#F1AEAE" }}
//                 type="email"
//                 id="email"
//                 value={enteredEmail}
//                 onChange={emailChangeHandler}
//                 onBlur={validateEmailHandler}
//               />
//             ) : (
//               <ControlInput
//                 type="email"
//                 id="email"
//                 value={enteredEmail}
//                 onChange={emailChangeHandler}
//                 onBlur={validateEmailHandler}
//               />
//             )}
//           </ControlContainer>
//           <ControlContainer>
//             <ControlLabel htmlFor="password">Password</ControlLabel>
//             {passwordIsValid === false ? (
//               <ControlInput
//                 style={{ borderColor: "red", background: "#F1AEAE" }}
//                 type="password"
//                 id="password"
//                 value={enteredPassword}
//                 onChange={passwordChangeHandler}
//                 onBlur={validatePasswordHandler}
//               />
//             ) : (
//               <ControlInput
//                 type="password"
//                 id="password"
//                 value={enteredPassword}
//                 onChange={passwordChangeHandler}
//                 onBlur={validatePasswordHandler}
//               />
//             )}
//           </ControlContainer>
//           <ControlActions>
//             <button type="submit" disabled={!formIsValid}>
//               Login
//             </button>
//           </ControlActions>
//         </form>
//       </LoginCard>
//     </>
//   );
// };
// export default Login;
// const LoginCard = styled.div`
//   background: #1f1f1f;
//   border-radius: 10px;
//   width: 420px;
//   margin: 2rem auto;
//   padding: 2rem;
//   display: flex;
//   justify-content: center;
// `;
// const ControlContainer = styled.div`
//   margin: 1rem 0;
// `;
// const ControlInput = styled.input`
//   font: inherit;
//   width: 370px;
//   height: 40px;
//   border-radius: 6px;
//   border: 1px solid #ccc;
//   &:focus {
//     outline: none;
//     border-color: #7c1292;
//     background: #e7c8ef;
//   }
// `;
// const ControlLabel = styled.label`
//   font-weight: bold;
//   flex: 1;
//   color: #ffffff;
//   margin-bottom: 0.5rem;
//   display: block;
// `;
// const ControlActions = styled.div`
//   display: flex;
//   justify-content: end;
//   margin-top: 50px;
// `;
// const LoginDiv = styled.div`
//   display: flex;
//   gap: 30px;
//   justify-content: end;
//   align-items: center;
//   background-color: #ad9be9;
//   width: 100%;
//   height: 10vh;
// `;
