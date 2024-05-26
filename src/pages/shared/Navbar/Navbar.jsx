import { NavLink } from "react-router-dom";
import logo from '../../../assets/icon/logo3.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.log(error);

            })
    }

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

        {/* cart section for large screen */}
        {
            user ? <li>
                <NavLink to='/dashboard/cart' className={({ isActive }) =>
                    isActive
                        ? "text-yellow-300   "
                        : ""
                }>
                    <span className="flex items-center">
                        <FaShoppingCart className="text-xl" />
                        <div className="badge badge-secondary ml-2">+{cart.length}</div>
                    </span>
                </NavLink>
            </li> : ''
        }
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


    </>
    return (
        <>
            <div className="navbar flex justify-between h-20 fixed z-10 bg-black bg-opacity-30  text-white max-w-screen-xl mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2  rounded-box w-52  font-bold  bg-white text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <a className=""><img className="w-32  h-30 " src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden md:flex lg:flex  ">
                    <ul className=" menu menu-horizontal px-1 font-bold">
                        {navOptions}
                    </ul>
                </div>
                {
                    user ?
                        <>
                            {/* cart section  for mobile screen */}
                            <div className="md:hidden">
                                <NavLink to='/dashboard/cart' className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-300   "
                                        : ""
                                }>
                                    <span className="flex items-center">
                                        <FaShoppingCart className="text-xl" />
                                        <div className="badge badge-secondary ml-2">+{cart.length}</div>
                                    </span>
                                </NavLink>

                            </div>

                            {/* <button onClick={handleLogOut} className="btn btn-outline text-[#fea116] font-bold">LOGOUT</button> */}
                            <div className="dropdown dropdown-end" title={user?.displayName}> {/* title={user?.displayName} use korle user name show korbe hover korle */}
                                <div tabIndex={0} role="button" className="btn hover:border-[#fea116] btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img referrerPolicy="no-referrer" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-lg font-bold bg-black text-yellow-300   ">
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div>

                        </>
                        :

                        <NavLink to='/login' >
                            <button className="btn bg-transparent text-white border-none  font-bold">Login</button>

                        </NavLink>
                }
            </div>


        </>
    );
};

export default Navbar;