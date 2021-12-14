import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// importing the context provider from AuthContext
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
  {/* wrapping the App component with the context provider so we will be able to 
  use the values inside the AuthContext in every component in our app
   */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
