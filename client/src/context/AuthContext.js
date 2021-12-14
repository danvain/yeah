//  importing the used hooks
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// initial state of user, isFetching(are we fetching any data) and error
// this is the initial state of the useReducer function
// we get the user from the local storage
const INITIAL_STATE = {
  user:JSON.parse(sessionStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
// creating a new context
export const AuthContext = createContext(INITIAL_STATE);

// creating a context provider that will pass the follwing values:(user,isFetching,error, the dispatch fucntion)
// children- the components that will be wrapped with AuthContext.Provider
// in our case its going to be the whole app, so we will wrap index.js
export const AuthContextProvider = ({ children }) => {
  // we create a useReducer hook, the reducer function is imported from AuthReducer
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  // local storage is a way to store data inside our browser,
  // in this useEffect we set a new item in the local Storge,
  // the key:user the value is state.user which is the user object we got from our server
  // the local storage data never expires which means that the user will stay logged on forever
  useEffect(()=>{
    sessionStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  
  return (
    // creating an authContext provider which values will be:(user,isFetching,error) and dispatch
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
