import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/shared/Menu/Menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MyOrder from "../pages/MyOrder/MyOrder";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import NotFound from "../pages/NotFound";
import AllUsers from "../pages/Dashboard/Cart/ALLUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },

            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myorder',
                element: <PrivetRoutes> <MyOrder></MyOrder></PrivetRoutes>
            }


        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            //* Admin only route
            {
                path: 'additem',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
                path: 'allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
            //* Admin route

        ]

    }
]);