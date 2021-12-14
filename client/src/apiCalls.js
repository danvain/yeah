import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess } from "./context/AuthActions";
// the apiCalls contains a loginCall function which is responsible for
// calling the dispatch functions which are in charge of calling the AuthReducer
// function that chnages the state of the variables that we pass in the AuthContext hook
export const loginCall = async (userCredential, dispatch) => {
  // we start with calling the first dispatch function with the loginstart action
  dispatch(LoginStart());
  try {
    // then we try to log in to our server, if the user credentials pass we
    // call another dispatch function that has an action type of LOGIN_SUCCESS and has a payload 
    // that contains the use object that we got from our database
    const res = await axios.post("/auth/login", userCredential);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    // if the user credentails ore wrong we call a dispatch which has an action of type LOFIN-FAILURE
    dispatch(LoginFailure());
  }
};

