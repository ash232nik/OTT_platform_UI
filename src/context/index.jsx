import React, { createContext, useState } from "react";
import { FetchPermissionData } from "./data/permission";
export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ ...FetchPermissionData() }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
