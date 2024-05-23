import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {

    const location = useLocation()
    console.log(location);

    /* jodi location er path name er moddhe login thake tahole heder footer dekhate chai na . shei jonn ei condition likha hoiise */
    const noHeaderFooter = location.pathname.includes('login')

    return (

        < div >
            <Navbar></Navbar>

            <Outlet></Outlet>

            {/* jodi login thake tahole footer show korbe na  */}
            {noHeaderFooter || <Footer></Footer>}


        </div >
    )
}

export default Main;