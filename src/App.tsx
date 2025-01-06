import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomeLayout from "./layouts/HomeLayout"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { AuthProvider } from "./provider/AuthContext"



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route path="/h" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  )

  return (
    <div className="max-w-[1440px] mx-auto" >

      <AuthProvider>
        <RouterProvider router={router} ></RouterProvider>
      </AuthProvider>
    </div >
  )
}

export default App
