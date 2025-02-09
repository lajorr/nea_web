
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NeaLogo from '../assets/images/nea_logo.png'
import { AuthContext } from '../provider/AuthContext'
const Navbar = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    const user = authContext?.user;
    return (
        <nav className="py-4 border-b border-black/30 flex justify-between mb-8" >
            <Link to="/">
                <img src={NeaLogo} alt="logo" />
            </Link>
            <div className='flex gap-2 items-end'>
                {!user &&
                    <button className='bg-blue-300 w-min px-4 h-min py-2 rounded col-span-2 place-self-end' onClick={() => {
                        authContext?.logoutUser();
                        navigate('/login')
                    }} >Login</button>
                }
                {user && <p className='text-lg font-[500] ' >Hello, {user.full_name}</p>}
            </div>
        </nav>
    )
}

export default Navbar