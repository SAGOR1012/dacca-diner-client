import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart } from 'react-icons/fa';
import { TfiCommentsSmiley } from "react-icons/tfi";
import { MdMenu } from "react-icons/md";
import useCart from "../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [cart] = useCart();

    return (
        <div className="flex">
            <div className="min-h-screen p-3 space-y-2 w-60 dark:bg-gray-50 dark:text-gray-800">
                {/* logo */}
                <div className="flex items-center p-2 space-x-4">
                    {/* jodi user thake tahole tar profile show korbe */}
                    {
                        user ?
                            <img src={user?.photoURL} alt="" className="w-full dark:bg-gray-500" />
                            : ''
                    }

                </div>
                <div className="divide-y dark:divide-gray-300 poetsen-one-regular">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {/* cart */}
                        <li className="dark:bg-gray-200 dark:text-gray-900   hover:scale-105 hover:transition hover:bg-white hover:text-yellow-600">
                            <NavLink to='/dashboard/cart' className={({ isActive }) =>
                                isActive
                                    ? "text-yellow-600   "
                                    : ""
                            }>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaShoppingCart />
                                    <span>My Cart ({cart.length})</span>
                                </a>
                            </NavLink>
                        </li>
                        {/* Reservations . hover class add korte hobe uprer moto .cusrsor disabale kora ache*/}
                        <li className="opacity-20   dark:bg-gray-200 dark:text-gray-900   ">
                            <NavLink to='/dashboard/reservation'>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md cursor-not-allowed">
                                    <FaCalendar />
                                    <span>Reservations</span>
                                </a>
                            </NavLink>
                        </li>

                        {/* review  . hover class add korte hobe uprer moto .cusrsor disabale kora ache*/}
                        <li className="opacity-20 dark:bg-gray-200 dark:text-gray-900   ">
                            <NavLink to='/dashboard/review'>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md cursor-not-allowed">
                                    <TfiCommentsSmiley />
                                    <span>Review</span>
                                </a>
                            </NavLink>
                        </li>
                        {/* divider */}
                        <div className="divider mt-2"></div>

                        {/* home */}
                        <li className="dark:bg-gray-200 dark:text-gray-900    hover:scale-105 hover:transition hover:bg-white hover:text-yellow-600">
                            <NavLink to='/'>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaHome></FaHome>
                                    <span> Home</span>
                                </a>
                            </NavLink>
                        </li>
                        {/* menu */}
                        <li className="dark:bg-gray-200 dark:text-gray-900    hover:scale-105 hover:transition hover:bg-white hover:text-yellow-600">
                            <NavLink to='/menu'>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <MdMenu></MdMenu>
                                    <span>Menu</span>
                                </a>
                            </NavLink>
                        </li>


                    </ul>

                </div>
            </div>

            {/* outline  */}
            <div className="flex-1">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;