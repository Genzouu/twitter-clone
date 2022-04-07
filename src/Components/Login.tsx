import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../Redux/reducers";
import { addUser } from "../Redux/Slices/usersSlice";
import "./Login.scss";

export default function Login() {
   const dispatch = useDispatch();
   const users = useSelector((state: StateType) => state.users);

   const manageAddUser = () => {
      const handleInput = document.getElementsByClassName("handle-input")[0] as HTMLInputElement;
      const passwordInput = document.getElementsByClassName("password-input")[0] as HTMLInputElement;

      if (handleInput.value !== "" && passwordInput.value !== "") {
         dispatch(addUser({ handle: handleInput.value, password: passwordInput.value }));
      }
   };

   return (
      <div className="login">
         <h1 className="title">Enter details</h1>
         <div className="handle-container">
            <p className="handle-text input-text">Handle</p>
            <input type="text" className="handle-input" />
         </div>
         <div className="password-container">
            <p className="password-text input-text">Password</p>
            <input type="text" className="password-input" />
         </div>
         <button className="login-button" onClick={() => manageAddUser()}>
            Login
         </button>
         {/* {users.map((user, index) => (
            <p className="user">{user.handle}</p>
         ))} */}
      </div>
   );
}
