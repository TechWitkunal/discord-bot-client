import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css'
import { clientPath } from '@/constant/app';
const Navbar = () => {
    const location = useLocation();
    return (
        <div className="w-[100%] h-[5rem] items-center justify-center flex">
            <div className="text-white bg-black rounded-lg px-[2rem] py-[1rem]">
                <ul className="flex items-center justify-center gap-[10px]">
                    <li className='li'>
                        <Link className={`${location.pathname == "/shop" ? "active" : ""}`} to={`${clientPath}/shop`}>Shop</Link>
                        </li>
                    <li className='li'>
                        <Link className={`${location.pathname == "/edit" ? "active" : ""}`} to={`${clientPath}/edit`}>Edit</Link>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
