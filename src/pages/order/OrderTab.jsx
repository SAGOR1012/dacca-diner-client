import FoodCard from "../shared/FoodCard/FoodCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-2 gap-3 lg:grid-cols-3'>

                        {
                            items.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}>
                                </FoodCard>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default OrderTab;