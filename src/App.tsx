import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { ProtectedRoute } from "./layouts/ProtectedRoute"
import RootLayout from "./layouts/RootLayout"
import AddBranch from "./pages/admin/AddBranch"
import AddDemandType from "./pages/admin/AddDemandType"
import AddPaymentOption from "./pages/admin/AddPaymentOption"
import AddRate from "./pages/admin/AddRate"
import GenerateBills from "./pages/admin/GenerateBills"
import SupportCenter from "./pages/customer/SupportCenter"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { AuthProvider } from "./provider/AuthContext"
import { BranchProvider } from "./provider/BranchContext"
import { DemandTypeProvider } from "./provider/DemandTypeContext"
import { PaymentOptionProvider } from "./provider/PaymentOptionContext"



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<SupportCenter />} />
          <Route path="/admin/manage_branch" element={<AddBranch />} />
          <Route path="/admin/manage_bills" element={<GenerateBills />} />
          <Route path="/admin/add_payment_option" element={<AddPaymentOption />} />
          <Route path="/admin/add_demand_type" element={<AddDemandType />} />
          <Route path="/admin/add_rate" element={<AddRate />} />
        </Route>
      </Route>
    )
  )

  return (
    <div className="max-w-[1440px] mx-auto" >

      <AuthProvider>
        <BranchProvider>
          <DemandTypeProvider>
            <PaymentOptionProvider>
              <RouterProvider router={router} ></RouterProvider>
          </PaymentOptionProvider>
          </DemandTypeProvider>
        </BranchProvider>
      </AuthProvider>
    </div >
  )
}

export default App
