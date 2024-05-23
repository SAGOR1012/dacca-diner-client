import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "./ChefService/ChefService";
import Featured from "./PopularMenu/Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testymonial from "./Testymonial/Testymonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dacca | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            {/* chef service */}
            <ChefService></ChefService>
            {/* Featured */}
            <Featured></Featured>
            {/* Testimonials */}
            <Testymonial></Testymonial>
        </div>
    );
};

export default Home;