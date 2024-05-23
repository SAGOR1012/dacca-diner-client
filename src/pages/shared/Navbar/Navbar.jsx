import { NavLink } from "react-router-dom";
import logo from '../../../assets/icon/logo3.png'
const Navbar = () => {

    /* nav options */
    const navOptions = < >

        <li>
            <NavLink to='/' className={({ isActive }) =>
                isActive
                    ? "text-yellow-300   "
                    : ""
            }>Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/menu' className={({ isActive }) =>
                isActive
                    ? "text-yellow-300   "
                    : ""
            }>Menu
            </NavLink>
        </li>
        <li>
            <NavLink to='/order' className={({ isActive }) =>
                isActive
                    ? "text-yellow-300   "
                    : ""
            }>Order
            </NavLink>
        </li>
        <li>
            <NavLink to='/login' className={({ isActive }) =>
                isActive
                    ? "text-yellow-300   "
                    : ""
            }>Login
            </NavLink>
        </li>

    </>
    return (
        <>
            <div className="navbar flex justify-between h-20 fixed z-10 bg-black bg-opacity-30  text-white max-w-screen-xl mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2  rounded-box w-52  font-bold  bg-white text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <a className=""><img className="w-32  h-30 " src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className=" menu menu-horizontal px-1 font-bold">
                        {navOptions}
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navbar;