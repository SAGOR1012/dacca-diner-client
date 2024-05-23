import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OrderTab from '../OrderTab';
const Order = () => {

    /* menuCategory er modde jei food category er "ORDER NOW" btn a click kora hobe tokhn order page er oi same namer tab auto select hobe  */
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);


    /* joto gulo dessert category ache sigulore filter kore ana hoyeche  */
    const desserts = menu.filter(item => item.category == 'dessert')

    /* joto gulo soup category ache sigulore filter kore ana hoyeche  */
    const soup = menu.filter(item => item.category == 'soup')

    /* joto gulo salad category ache sigulore filter kore ana hoyeche  */
    const salad = menu.filter(item => item.category == 'salad')

    /* joto gulo pizza category ache sigulore filter kore ana hoyeche  */
    const pizza = menu.filter(item => item.category == 'pizza')

    /* joto gulo drink category ache sigulore filter kore ana hoyeche  */
    const drink = menu.filter(item => item.category == 'pizza')

    /* joto gulo pizza category ache sigulore filter kore ana hoyeche  */
    // const offered = menu.filter(item => item.category == 'offered')
    return (
        <div >
            {/* tab er upor ei title show krobe  */}
            <Helmet>
                <title>Dacca | Order </title>
            </Helmet>

            <div className='mb-10 '>
                <Cover img={orderCoverImg} title="ORDER FOOD"></Cover>
            </div>


            {/* tab bar */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='font-semibold mb-10 text-center'>
                    <TabList >
                        <Tab >Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                </div>

                <TabPanel>
                    <div >
                        <OrderTab items={salad}></OrderTab>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div >
                        <OrderTab items={pizza}></OrderTab>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div >
                        <OrderTab items={soup}></OrderTab>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div >
                        <OrderTab items={desserts}></OrderTab>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div >
                        <OrderTab items={drink}></OrderTab>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;