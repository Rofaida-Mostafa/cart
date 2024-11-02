import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  
  // const [token, setToken] = useState(localStorage.getItem("tkn"));

  //{ localStorage.getItem("tkn") ب tkn ده بديل إني اخلي ال

  useEffect(() => {
    const userToken = localStorage.getItem("tkn");

    if (userToken != null) {
      const decodedToken = jwtDecode(userToken);
      setToken(decodedToken);
      // console.log("Decoded Token:", decodedToken);
      // console.log(token);
    }
  }, []);

  //  }

  return (
    <AuthContext.Provider
      value={{
        setToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
