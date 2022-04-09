import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Login.scss";
import { StateType } from "../Redux/reducers";
import { setUser } from "../Redux/Slices/currentUserSlice";
import { addUser } from "../Redux/Slices/usersSlice";

export default function Login() {
   const dispatch = useDispatch();
   const users = useSelector((state: StateType) => state.users);

   const manageAddUser = () => {
      const handleInput = document.getElementsByClassName("handle-input")[0] as HTMLInputElement;
      const passwordInput = document.getElementsByClassName("password-input")[0] as HTMLInputElement;

      if (handleInput.value !== "" && passwordInput.value !== "") {
         const userIndex = users.findIndex((u) => u.handle === handleInput.value);
         if (userIndex < 0) {
            dispatch(addUser({ handle: handleInput.value, password: passwordInput.value }));
            dispatch(setUser(handleInput.value));
         } else {
            if (users[userIndex].password === passwordInput.value) {
               dispatch(setUser(handleInput.value));
            } else {
               passwordInput.value = "";
               alert("Incorrect password");
            }
         }
      }
   };

   const manageLink = (): boolean => {
      const handleInput = document.getElementsByClassName("handle-input")[0] as HTMLInputElement;
      const passwordInput = document.getElementsByClassName("password-input")[0] as HTMLInputElement;
      const loginButton = document.getElementsByClassName("login-link")[0] as HTMLButtonElement;
      if (handleInput.value === "" || passwordInput.value === "") {
         loginButton.classList.add("login-link-disabled");
         return false;
      } else {
         loginButton.classList.remove("login-link-disabled");
         return true;
      }
   };

   return (
      <div className="login">
         <h1 className="title">Enter details</h1>
         <div className="handle-container">
            <p className="handle-text input-text">Handle</p>
            <input type="text" className="handle-input" onChange={() => manageLink()} />
         </div>
         <div className="password-container">
            <p className="password-text input-text">Password</p>
            <input type="text" className="password-input" onChange={() => manageLink()} />
         </div>
         <Link
            to={"/"}
            className="login-link login-link-disabled"
            onClick={(e) => {
               if (!manageLink()) e.preventDefault();
            }}
         >
            <button className="login-button" onClick={() => manageAddUser()}>
               Login
            </button>
         </Link>
      </div>
   );
}
