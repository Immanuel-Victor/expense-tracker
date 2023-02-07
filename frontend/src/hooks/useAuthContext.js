import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function useAuthContext() {
  const context = useContext(AuthContext);
  console.log("Context: ", context);

  if (!context) {
    throw Error("The auth context should have a Provider");
  }

  return context;
}

export { useAuthContext };
