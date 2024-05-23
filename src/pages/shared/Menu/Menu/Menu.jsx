import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuImage from '../../../../assets/home/banner.jpg';
import dessertImage from '../../../../assets/menu/dessert-bg.jpeg'
import saladImage from '../../../../assets/menu/salad-bg.jpg'
import pizzaImage from '../../../../assets/menu/pizza-bg.jpg'
import soupImage from '../../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../../Hooks/useMenu';
import SectionTitle from '../../SectionTitle/SectionTitle';
import MenuCategory from '../../../ManuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();  /* custom hooks */

    /* joto gulo dessert category ache sigulore filter kore ana hoyeche  */
    const desserts = menu.filter(item => item.category == 'dessert')

    /* joto gulo soup category ache sigulore filter kore ana hoyeche  */
    const soup = menu.filter(item => item.category == 'soup')

    /* joto gulo salad category ache sigulore filter kore ana hoyeche  */
    const salad = menu.filter(item => item.category == 'salad')

    /* joto gulo pizza category ache sigulore filter kore ana hoyeche  */
    const pizza = menu.filter(item => item.category == 'pizza')

    /* joto gulo pizza category ache sigulore filter kore ana hoyeche  */
    const offered = menu.filter(item => item.category == 'offered')


    return (


        <div>
            <Helmet>
                <title>Dacca | Menu</title>
            </Helmet>

            {/* main cover image */}
            <Cover img={menuImage} title={"our manu"}></Cover>

            {/* offered title and cover */}
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts title and cover */}

            <MenuCategory
                title="dessert"
                items={desserts}
                img={dessertImage}
            ></MenuCategory>

            {/* pizza title and cover */}
            <MenuCategory
                title="pizza"
                items={pizza}
                img={pizzaImage}
            ></MenuCategory>

            {/* salad title and cover */}
            <MenuCategory
                title="salad"
                items={salad}
                img={saladImage}
            ></MenuCategory>

            {/* SOUPS title and cover */}
            <MenuCategory
                title="soup"
                items={soup}
                img={soupImage}
            ></MenuCategory>
        </div >
    );
};

export default Menu;