import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const HomeLayout = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default HomeLayout