import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Accordion from '../components/elements/Accordion';
import Layout from '../components/layout/Layout';
import Brand from '../components/slider/Brand';
import Testimonial from '../components/slider/Testimonial';
import ModalVideo from 'react-modal-video';
import HeroSlider from '../components/slider/HeroSlider';
import Offer from '../components/slider/Offer';
import OfferReverse from '../components/slider/OfferReverse';

const HomePage01 = () => {
    const [isOpen, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>Enabeling a digital Tomorrow | Insead Technology</title>
            </Head>

            <Layout>
            <section className="section banner-11">
                    <div className="box-banner-home11">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-1 right-pagination">
                                <HeroSlider/>
                            </div>
                        </div>
                        <div className="swiper-pagination right-pagination swiper-pagination-group-11" />
                    </div>
                </section>


              {/*   <section className="section">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="color-brand-1 mb-20">We offer web development <span className="line-under"><span>digital</span></span>  solution in UK.</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500 mb-30">Providing a highly responsive solution to our customers is our priority. From the beginning of the project until its very end, we strive to accomplish immaculate quality development and engaging website designing service.</p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30"><Link className="btn btn-brand-1 hover-up" href="#">Learn More</Link><a className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <object data="assets/imgs/page/homepage1/hero-banner.svg" type="image/svg+xml" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

<section className="section bg-brand-1 box-why-trusted-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 mb-30">
                                <div className="rating"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                <h2 className="color-white mb-5">See why we are <br className="d-none d-lg-block" />trusted the <br className="d-none d-lg-block" />world over</h2>
                            </div>
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <p className="font-sm color-white mb-20">Et quaerat deserunt et numquam voluptatem et laborum consectetur non consequatur temporibus ea repellat nihil vel consectetur dolores et rerum voluptas. Nam voluptas reiciendis non laborum perspiciatis eum omnis cumque ab impedit earum ex quos porro sit dolorem cupiditate ut ducimus autem.</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">469k</h2>
                                        <p className="font-lg color-white">Social followers</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">25k+</h2>
                                        <p className="font-lg color-white">Happy Clients</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">756+</h2>
                                        <p className="font-lg color-white">Project Done</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-20">
                                        <h2 className="color-white">100+</h2>
                                        <p className="font-lg color-white">Global branch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="box-radius-bottom">
                        <div className="container">
                        <div className="row mt-50 align-items-end">
                            <div className="col-xl-4 col-lg-4 mb-30">
                                <h4 className="color-brand-1 mb-5">See why we are <br className="d-none d-lg-block" />trusted the world over</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mt-20">
                                        <h2 className="color-brand-1">756+</h2>
                                        <p className="font-lg color-brand-1">Project Done</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mt-20">
                                        <h2 className="color-brand-1">100+</h2>
                                        <p className="font-lg color-brand-1">Global branch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 mb-30">
                            <div className="box-swiper">
                                    <div className="swiper-container swiper-group-8">
                                        <div className="swiper-wrapper">
                                            <Brand />
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-group-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
             </section>

             <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">
                                    What makes us different from others? We give holistic solutions
                                    <br className="d-none d-lg-block" />
                                    with strategy, design &amp; technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <Offer />
                                </div>
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <OfferReverse />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; by adopting cutting edge technology.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">Learn More
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Web Development and Design</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead Tech is the best web development company in London, UK with the experience of more than a decade. Our approach is customer-focused, clients centric, and develop websites that deliver tangible results. Insead tech has the best web developers, helping brands outperform the competition.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">App Development</h4>
                                        <p className="font-md color-grey-500 mb-15">We can design, code, and market your app so your business can perform at its best. Insead Tech is a fully experienced app development company that closely worked with industries like pharmaceuticals, the textile sector, eCommerce, health & fitness, social platforms, and more. Stay ahead of the competition and improve business sales.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Best UK Based SEO Agency</h4>
                                        <p className="font-md color-grey-500 mb-15">At Insead Tech, our specialized team of SEO experts, plan and implement top-notch SEO strategies that maximize ROI, and our social media and search engine optimizers work neck to neck with the clients to achieve the results. First, we evaluate competition and craft strategies to achieve your business goals.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Shopify Web Development </h4>
                                        <p className="font-md color-grey-500 mb-15">Insead Technologies provide high-end Shopify development services for organizations and enterprises to enhance their digital presence and skyrocket their sales. Regarding Shopify design and development, shop installation, or configuration, Our bespoke solutions will help your business reach its eCommerce goals exactly how you want it. </p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Wordpress Web Development </h4>
                                        <p className="font-md color-grey-500 mb-15">Our team of WooCommerce experts has extensive experience developing SEO-friendly and high-performing websites. We offer result driven and cost-effective WooCommerce web development services. We offer competitive pricing and quality solutions delivered on time. Our extensive experience across various industrial sectors can help you boost your business.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Magento Web Development </h4>
                                        <p className="font-md color-grey-500 mb-15">At Insead Tech, our specialized team of SEO experts, plan and implement top-notch SEO strategies that maximize ROI, and our social media and search engine optimizers work neck to neck with the clients to achieve the results. First, we evaluate competition and craft strategies to achieve your business goals.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">IT Staff Sourcing </h4>
                                        <p className="font-md color-grey-500 mb-15">To make your business better known, you need the traffic to get it. As you know about Google Business Optimization? If not, Insead Tech allows you to position your GMB posts in the best possible way. We have a talented team of tech monstrosities who do amazing things in a few different ways.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Graphic Designing</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead Tech gives a great graphic design service to make your website show eye-getting and appealing! The graphics of your website will tell your client's exact story that you like a specific story. For this very reason, we at Company name have an attractive designer to cater to all aspects of your design need.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Reputation Management</h4>
                                        <p className="font-md color-grey-500 mb-15"> If you introduce your business online, we will help you build a standing, about which your competitors can dream. If you have an organization or business that is set up, Insead Tech reputation management service ensures that it stays consistent with you and becomes to be better over the long haul.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section mt-50 pt-50 pb-90">
                    <div className="container">
                        <div className="bg-brand-1 box-cover-video">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/homepage1/img-video.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag"> Web Development UK Based Agency</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">Integrate with over 1,000 project management apps</h3>
                                        <p className="font-md color-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-2" href="contact">
                                                    Get Free Quote
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                </section>
               {/*  <section className="section mt-50 bg-grey-80 bg-plan pt-110 pb-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                                <p className="font-lg color-gray-500">Pick your plan. <br className="d-none d-lg-block" /> Change whenever you want.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">Compare plans
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan"><img src="assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Trial Plan</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">FREE</span><span className="font-md color-grey-500">- 30 days trial</span><br /><span className="font-xs color-grey-500">No Credit card required</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Try for free
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-1"><img src="assets/imgs/page/homepage1/standard.svg" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Standard</h4>
                                            <p className="font-md color-grey-400">Advanced project</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">$29</span><span className="font-md color-grey-500">- user / month<br /></span><span className="font-xs color-grey-500">Billed annually</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan card-plan-2 hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-2"><img src="assets/imgs/page/homepage1/business.svg" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Business</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">$99</span><span className="font-md color-grey-500">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-3"><img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Enterprise</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial"><span className="font-lg-bold color-brand-1">$299</span><span className="font-md color-grey-500">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span></div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Snapchat Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>TikTok Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20"><Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                        <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section mt-80">
                    <div className="container">
                        <div className="box-radius-16 bg-4">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="color-brand-1 mb-20">
                                      We strive to accomplish immaculate
                                       <br className="d-none d-lg-block" />
                                       quality product development.
                                    </h2>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                Financial Management System
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Insead Tech Financial Management System | FMS is the top best software in the United Kingdom that an organization uses to oversee and govern its income, expenses, and assets with the objectives of maximizing profits and ensuring sustainability.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                Human Resource Management System
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Insead HRMS is today’s most comprehensive, fully customized, and featured HR management solution for every type of business. We help you to improve the effectiveness and efficiency of your work and make better decisions across all your key HR tasks.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                HELP Desk
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Support is a very effective product that allows users to send inquiries to our experienced team so that we can support them easily.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross5.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                Visitor Management System VMS
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">The Visitor Management System VMS is a feature-rich suite of components that facilitate the tracking and monitoring of visiting individuals within a complex or building.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                Point of Sale POS
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Run your retail point-of-sale POS system both online and offline! Insead Tech’s innovative system streamlines all aspects of your sales into an all-in-one solution.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross5.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                ERP Solution
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">The implementation of ERP depends on being compatible with a reliable and competent software provider. We ensure that the best ERP Software will enable your organization to achieve its business goals.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-80 mb-30 bg-faqs">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                                <p className="font-lg color-gray-500">Feeling inquisitive? Have a read through some of our FAQs or<br className="d-none d-lg-block" /> contact our supporters for help</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">Contact Us
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-50 mb-100">
                            <div className="col-xl-3 col-lg-4">
                                <ul className="list-faqs nav nav-tabs" role="tablist">
                                    <li><a className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)} ><span>General Support</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Order / Purchase</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>Download / Install</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}><span>Technology</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 5 ? "active" : ""} onClick={() => handleOnClick(5)}><span>Your Account</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                </ul>
                                <div className="mt-80 text-start mb-40"><Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><a className="btn btn-default font-sm-bold hover-up" href="#">Support Center
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="tab-content tab-content-slider">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom" />
                </section>
                
                <section className="section mt-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="card-guide bg-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage7/payment.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-1 mb-15">Dedicated Teams</h5>
                                        <p className="font-md color-grey-500"> Fill gaps in your skillset with our team of seasoned professionals.</p>
                                        <div className="mt-10"><Link href="#" className="btn btn-default font-sm-bold pl-0">Contact Us
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-guide bg-7">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage7/money.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-1 mb-15">Fixed Price</h5>
                                        <p className="font-md color-grey-500"> Focus on your core business while we take care of the technicalities.</p>
                                        <div className="mt-10"><Link href="#" className="btn btn-default font-sm-bold pl-0">Get Free Quote
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="text-center mb-70">
                            <h2 className="color-brand-1 mb-20">High quality projects finished within timeline <br className="d-none d-xl-block" />that saves your cost and time</h2>
                        </div>
                        <div className="row mt-50 mb-100">
                            <div className="col-xl-7 col-lg-6">
                                <div className="box-images-project">
                                    <div className="box-images mt-50"> <img className="img-main-2" src="assets/imgs/page/homepage1/project1.png" alt="iori" />
                                        <div className="image-2 shape-3"> <img src="assets/imgs/page/homepage1/finger.png" alt="iori" /></div>
                                        <div className="image-3 shape-1"> <img src="assets/imgs/page/homepage1/circle.png" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag"> Full Software Developement </span>
                                <h3 className="color-brand-1 mt-10 mb-15">Design & deploy  world-class app for your business opertions</h3>
                                <p className="font-md color-grey-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                <div className="mt-20">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Task tracking
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Create task dependencies
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Task visualization
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>hare files, discuss
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Meet deadlines faster
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Track time spent on each project
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Quote </Link><a className="btn btn-default font-sm-bold hover-up" href="#">Learn More about in-house developed apps.
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                        </div>
                        <div className="row mb-100 mt-50 project-revert">
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag">Best UK Based SEM Services</span>
                                <h3 className="color-brand-1 mt-10 mb-15">Build your brand and reach out to social followers</h3>
                                <p className="font-md color-grey-400">Sharing content online allows you to craft an online persona that reflects your personal values and professional skills. Even if you only use social media occasionally, what you create, share or react to feeds into this public narrative. How you conduct yourself online is now just as important as your behavior offline especially when it comes to your digital marketing career.</p>
                                <div className="mt-20">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Send &amp; Schedule Posts
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Live Chat Request
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Push Notification
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Create fully integrated campaigns
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Online Visitors
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Directly send or schedule posts
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Download App </Link><a className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="box-images-project">
                                    <div className="box-images mt-50"> <img className="img-main-2" src="assets/imgs/page/homepage1/project2.png" alt="iori" />
                                        <div className="image-2 shape-3"> <img src="assets/imgs/page/homepage1/Union.png" alt="iori" /></div>
                                        <div className="image-3 shape-1"> <img src="assets/imgs/page/homepage1/eye.png" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom" />
                </section>
                <section className="section mt-100 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-4 text-start pt-50">
                                <div className="row">
                                    <div className="col-md-9"><img className="mb-30" src="assets/imgs/page/homepage2/customer.png" alt="iori" /></div>
                                </div>
                                <h2 className="color-brand-1 mb-20">What our custommers are saying</h2>
                                <p className="font-lg color-gray-500">Hear from our users who have saved thousands on their Startup and SaaS solution spend.</p>
                                <div className="mt-20"> <a className="btn btn-default font-sm-bold pl-0">View All
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-30 mt-50">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                                    <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                                </div>
                                                <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</p>
                                                <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-30 testimonial-warning">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author2.png" alt="iori" /></Link>
                                                    <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                                </div>
                                                <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</p>
                                                <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-30">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author3.png" alt="iori" /></Link>
                                                    <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                                </div>
                                                <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</p>
                                                <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-30">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author4.png" alt="iori" /></Link>
                                                    <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                                </div>
                                                <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</p>
                                                <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog</h2>
                                <p className="font-lg color-gray-500">Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.<br className="d-none d-lg-block" />Aenean vulputate sodales urna ut vestibulum</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">View All
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-70">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
                                        <h4 className="color-brand-1">The smart way to grow your money while you sleep</h4></Link>
                                        <div className="mt-20"><span className="date-post font-xs color-grey-300">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus. Fusce varius vel velit commodo consectetur. Aliquam sodales posuere neque, eget placerat libero fermentum nec. Fusce malesuada laoreet enim, ut convallis odio eleifend vitae.</p>
                                        <div className="mt-20 d-flex">
                                            <div className="box-author"><Link href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                                <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                            </div>
                                            <div className="box-button-more text-end"><a className="btn btn-default font-sm-bold" href="blog-detail">Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
                                        <h4 className="color-brand-1">Helpful Tips for Working from Home as a Freelancer</h4></Link>
                                        <div className="mt-20"><span className="date-post font-xs color-grey-300">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus. Fusce varius vel velit commodo consectetur. Aliquam sodales posuere neque, eget placerat libero fermentum nec. Fusce malesuada laoreet enim, ut convallis odio eleifend vitae.</p>
                                        <div className="mt-20 d-flex">
                                            <div className="box-author"><Link href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                                <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                            </div>
                                            <div className="box-button-more text-end"><a className="btn btn-default font-sm-bold" href="blog-detail">Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-blogs">
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info"><Link href="blog-detail">
                                                <h5 className="color-brand-1">How to make a great impression from the first moment</h5></Link>
                                                <div className="mt-10"><span className="date-post font-xs color-grey-300">
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg><span>29 May 2022</span></span><span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg><span>3 mins read</span></span></div>
                                            </div>
                                            <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news-sm1.png" alt="iori" /></Link></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info"><Link href="blog-detail">
                                                <h5 className="color-brand-1">We can blend colors multiple ways, the most common</h5></Link>
                                                <div className="mt-10"><span className="date-post font-xs color-grey-300">
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg><span>29 May 2022</span></span><span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg><span>3 mins read</span></span></div>
                                            </div>
                                            <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news-sm2.png" alt="iori" /></Link></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info"><Link href="blog-detail">
                                                <h5 className="color-brand-1">How To Blow Through Capital At An Incredible Rate</h5></Link>
                                                <div className="mt-10"><span className="date-post font-xs color-grey-300">
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg><span>29 May 2022</span></span><span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg><span>3 mins read</span></span></div>
                                            </div>
                                            <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news-sm3.png" alt="iori" /></Link></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info"><Link href="blog-detail">
                                                <h5 className="color-brand-1">Design Studios That Everyone Should Know About?</h5></Link>
                                                <div className="mt-10"><span className="date-post font-xs color-grey-300">
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg><span>29 May 2022</span></span><span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg><span>3 mins read</span></span></div>
                                            </div>
                                            <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news-sm4.png" alt="iori" /></Link></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="box-image-newsletter"> <img className="img-main" src="assets/imgs/template/newsletter_img.png" alt="iori" />
                                        <div className="shape-2 image-1"> <img src="assets/imgs/template/newsletter_finger.png" alt="iori" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subscribe to Our Newsletter</h2>
                                    <p className="font-md color-grey-500">Sign up for Insead tech to receive all the new features and offers regarding the web and app development and marketing related services that you might have. Simply type in your email address and we’ll include you in our next update.</p>
                                    <div className="form-newsletter mt-30">
                                        <form action="#">
                                            <input type="text" placeholder="Enter you mail .." />
                                            <button className="btn btn-submit-newsletter" type="submit">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
};

export default HomePage01;