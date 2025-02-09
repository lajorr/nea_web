import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { loginWithUserNameAndPassword, registerUser } from "../services/Auth";
import { User, UserRequest } from "../types/User";



type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => void;
  register: (username: string, password: string, fullName: string, contact: string, address: string, branchId: number, demandTypeId: number) => void
  logoutUser: () => void;
  isAuthenticated: boolean
}

// Creating the context with a default value of undefined
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {


  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      // setUser(JSON.parse(localUser))
      const user = JSON.parse(localUser) as User;
      setUser(user)
    }

  }, [])
  const login = async (username: string, password: string) => {
    const user = await loginWithUserNameAndPassword(username, password);

    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }
  const register = async (username: string, password: string, fullName: string, contact: string, address: string, branchId: number, demandTypeId: number) => {

    const data: UserRequest = {
      username: username,
      password: password,
      full_name: fullName,
      contact: contact,
      address: address,
      branch_id: branchId,
      demand_type_id: demandTypeId
    }
    const user = await registerUser(data);
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }
  const logoutUser = () => {
    setUser(null)
    localStorage.clear()
  }
  return (
    <AuthContext.Provider value={{
      user: user,
      login,
      logoutUser: logoutUser,
      isAuthenticated: user !== null,
      register
    }}> {children}</AuthContext.Provider>
  )
}



export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}