import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, } from 'react-icons/fa';
import { TfiCommentsSmiley } from "react-icons/tfi";
import useCart from "../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();

    const [isAdmin] = useAdmin();



    return (
        <div className="flex flex-col md:flex-row">


            <div className="w-full md:w-56 md:min-h-screen p-3 space-y-2 w-60 dark:bg-gray-50 dark:text-gray-800">
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
                        {/* shared item start */}

                        {/* Admin Access Options */}
                        {
                            isAdmin ? <>
                                {/* admin home */}
                                <li className="dark:bg-gray-200 dark:text-gray-900    hover:scale-105 hover:transition hover:bg-white hover:text-yellow-600">
                                    <NavLink to='/'>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <FaHome></FaHome>
                                            <span>Admin Home</span>
                                        </a>
                                    </NavLink>
                                </li>
                                {/* add item . hover class add korte hobe uprer moto .cusrsor disabale kora ache*/}
                                <li className="   dark:bg-gray-200 dark:text-gray-900   ">
                                    <NavLink to='/dashboard/additem'>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <FaUtensils />
                                            <span>Add Item</span>
                                        </a>
                                    </NavLink>
                                </li>

                                {/* manage item */}
                                <li className="opacity-20 dark:bg-gray-200 dark:text-gray-900   ">
                                    <NavLink to=''>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md cursor-not-allowed">
                                            <FaList></FaList>
                                            <span>Manage Items</span>
                                        </a>
                                    </NavLink>
                                </li>
                                {/* manage bookings */}
                                <li className="opacity-20 dark:bg-gray-200 dark:text-gray-900   ">
                                    <NavLink to=''>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md cursor-not-allowed">
                                            <FaList></FaList>
                                            <span>Manage Bookings</span>
                                        </a>
                                    </NavLink>
                                </li>

                                {/* users  . hover class add korte hobe uprer moto .cusrsor disabale kora ache*/}
                                <li className="opacity-20 dark:bg-gray-200 dark:text-gray-900   ">
                                    <NavLink to='/dashboard/allusers'>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md cursor-not-allowed">
                                            <FaUsers></FaUsers>
                                            <span>All Users</span>
                                        </a>
                                    </NavLink>
                                </li>
                            </> :
                                <>{/* cart */}
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
                                    </li></>
                        }

                        {/* shared item end....*/}


                        {/* divider.......................................... */}
                        <div className="divider mt-2"></div>

                        {/* home */}



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