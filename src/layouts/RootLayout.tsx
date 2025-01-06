import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex gap-4 size-full' >
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout