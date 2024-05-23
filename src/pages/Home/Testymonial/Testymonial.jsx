import SectionTitle from "../../shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from "react";
/* react rating */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testymonial = () => {

    const [reviews, setReviews] = useState([])

    fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            setReviews(data)

        })
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            {/* Swiping system  */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center space-y-5 mx-24   m-24">
                            {/* rating start */}
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            {/* rating end*/}

                            <p>{review.details}</p>
                            <h3 className="text-2xl text-[#D99904] md:text-3xl font-semibold">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div>

            </div>
        </section>

    );
};

export default Testymonial;