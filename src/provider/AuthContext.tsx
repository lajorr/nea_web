import { createContext, ReactNode, useContext, useState } from "react";
import { UserType } from "../utils/enums";

export interface User {
  userId: string;
  userName: string;
  fullName: string;
  password: string;
  type: UserType;
}

type AuthContextType = {
  user: User | null;
  setContextUser: (user: User) => void;
  logoutUser: () => void;
  isAuthenticated: boolean
}

// Creating the context with a default value of undefined
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const setContextUser = (user: User) => {
    setUser(user)
  }
  const logoutUser = () => {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user: user, setContextUser: setContextUser, logoutUser: logoutUser, isAuthenticated: user !== null }}> {children}</AuthContext.Provider>
  )
}



export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}