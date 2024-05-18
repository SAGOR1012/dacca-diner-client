// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* import image form local device */
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div>
            {/*time and  ORDER ONLINE  */}
            <div className='max-w-[424px] text-center mx-auto mb-12' >
                <h5 className='text-[#D99904] mb-4'>---From 11:00am to 10:00pm---</h5>
                <div className='border-y-slate-700 border-t-2 border-b-2 p-5 '>
                    <h3 className='text-white'>ORDER ONLINE</h3>
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} /> <h3 className=' text-xl md:lg:text-3xl lg:text-4xl text-center -mt-12  lg:-mt-20 lg:pb-7 md:pb-7 text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} /> <h3 className=' text-xl md:lg:text-3xl lg:text-4xl text-center -mt-12  lg:-mt-20 lg:pb-7 md:pb-7 text-white'>Pizzas</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} /> <h3 className=' text-xl md:lg:text-3xl lg:text-4xl text-center -mt-12  lg:-mt-20 lg:pb-7 md:pb-7 text-white'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} /> <h3 className=' text-xl md:lg:text-3xl lg:text-4xl text-center -mt-12  lg:-mt-20 lg:pb-7 md:pb-7 text-white'>Desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} /> <h3 className=' text-xl md:lg:text-3xl lg:text-4xl text-center -mt-12  lg:-mt-20 lg:pb-7 md:pb-7 text-white'>Salads</h3></SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;