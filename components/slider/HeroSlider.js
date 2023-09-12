import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/components/pagination/pagination.min.css";


SwiperCore.use([Autoplay, Navigation,Pagination]);

const HeroSlider = () => {

    const data = [
        { img: "placed.png" },
        { img: "cuebiq.png" },
        { img: "factual.png" },
        { img: "placeiq.png" },
        { img: "airmeet.png" },
        { img: "spen.png" },
        { img: "klippa.png" },
        { img: "matrix.png" }
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="banner-slide-11" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/Insead-Tech-Web-Development-Banner-Theme-3-1.jpg)' }}>
                        <div className="banner-abs">
                            <div className="container">
                               
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="banner-slide-11" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/Insead-Tech-App-Development-Banner-Theme-3-1.jpg)' }}>
                      
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="banner-slide-11" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/Insead-Tech-IT-Staff-Outsourcing-Banner-Theme-3-1.jpg)' }}>
                        <div className="banner-abs">
                            <div className="container">
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>



        </>
    );
};

export default HeroSlider;

