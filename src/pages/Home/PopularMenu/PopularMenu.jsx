import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    /* menu data fetch  */
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then((data) => {
                // console.log(data);

                /* joto gulo popular category ache sigulore filter kore ana hoyeche  */
                const popularItems = data.filter(item => item.category == 'popular')
                setMenu(popularItems);
            })
    }, [])
    return (
        <div className="mb-12">
            <section>
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-10 px-12">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >

                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;