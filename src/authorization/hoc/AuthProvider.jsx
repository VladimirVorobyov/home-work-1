import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [obj, setObj] = useState(null);
  const signin = (newObj, cb) => {
    setObj(newObj);
    cb();
  };
  const signout = (cb) => {
    setObj(null);
    cb();
  };
  const value = { obj, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
