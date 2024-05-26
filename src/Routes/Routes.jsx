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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <PrivetRoutes> <Cart></Cart> </PrivetRoutes>
            }
        ]

    }
]);