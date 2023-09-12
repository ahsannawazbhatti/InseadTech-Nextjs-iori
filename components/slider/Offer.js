import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Offer = () => {

    const data = [
        {
            title: "Cross-Platform",
            color: "head-bg-2",
            img: "cross.png",
        },
        {
            title: "Business strategy",
            color: "head-bg-5",
            img: "cross2.png",
        },
        {
            title: "Local Marketing",
            color: "head-bg-3",
            img: "business.svg",
        },
        {
            title: "Social Media",
            color: "head-bg-4",
            img: "cross4.png",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className={`swiper-slide ${item.color}`}>
                        <div className="card-offer-style-3">
                            <div className="card-head">
                                <div className="card-image"><img src={`assets/imgs/page/homepage1/${item.img}`} alt="iori" /></div>
                                <div className="carrd-title">
                                    <h4 className="color-brand-1">{item.title}</h4>
                                </div>
                            </div>
                            <div className="card-info">
                                <p className="font-m color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1 hover-up">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>

        </>
    );
};

export default Offer;

