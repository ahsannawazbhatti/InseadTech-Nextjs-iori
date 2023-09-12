import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Accordion from '../components/elements/Accordion';
import AccordionWoocom from '../components/elements/AccordionWoocom';
import AccordionShopify from '../components/elements/AccordionShopify';
import AccordionMagento from '../components/elements/AccordionMagento';
import Layout from '../components/layout/Layout';
import Brand from '../components/slider/Brand';
import OfferReverse from '../components/slider/OfferReverse';
import TypeWriter from "../components/elements/Typewriter" ;

const typeWriter = ["Stay Focused", "Stay Ahead", "Grow Business"];

const HomePage1 = () => {
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
                        <div className="row mt-50  align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-6 col-12">
                                        <div className="box-info-banner11 pt-20 "> 
                                          <h3 className="h1_gradeint mb-20 pb-20 pt-20 "> <TypeWriter data={typeWriter} /></h3>
                                            <p className="color-black-500 font-md">Insead Tech adopts and implements industry-leading techniques to get found more often in search engines</p>
                                            <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Proposal </Link><a className="btn btn-default font-md-bold hover-up" href="#">Contact us
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>

                        <div className="col-xl-7 col-lg-7 col-md-6 d-none d-md-block">
                                <div className="box-banner-home11">
                                    <div className="box-swiper">
                                        <div className="banner-slide-11" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/Banner-White.jpg)' }}>
                                        </div>
                                    </div>
                             </div>
                          </div>
                    </div>
             </section>

             

             <section className="section bg-brand-1 box-why-trusted-11 ">
                    <div className="container align-items-center">
                             <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 mt-20 text-center">
                                    <img src='\assets\imgs\template\new-up-city.webp' alt="iori" height="46px" width="135px"/>
                                <div className="rating"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                               
                                        <p className="font-lg color-white">150+ Reviews</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 mt-20 text-center">
                                    <img src='\assets\imgs\template\google-review.svg' alt="iori"  height="46px" width="135px"/>
                                      <div className="rating"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                        <p className="font-lg color-white">70+ Reviews</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 mt-20 text-center">
                                    <img src='\assets\imgs\template\cluch-review.svg' alt="iori" height="46px" width="135px" />
                                         <div className="rating"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                        <p className="font-lg color-white">110+ Reviews</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 mt-20 text-center">
                                    <img src='\assets\imgs\template\facebook-review.png' alt="iori" height="46px" width="135px" />
                                        
                                <div className="rating"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                        <p className="font-lg color-white">60+ Reviews</p>
                                    </div>
                                </div>
                    </div>
                </section>

                
             <section className="section mt-20">
             <div className="container">
                        <div className="row mt-50 align-items-start">
                        <div className="col-xl-4 col-lg-4 mb-30">
                                <h4 className="color-brand-1 mb-5">Our Clients, Our Strength</h4>
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
                            <div className="col-xl-8 col-lg-8 mb-20">
                            <div className="box-swiper">
                                    <div className="swiper-container swiper-group-8">
                                        <div className="swiper-wrapper">
                                            <Brand />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    <div className="border-bottom" />
                </section>

             <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">
                                Top best web design &amp; developmet solutions for  
                                    <br className="d-none d-lg-block" />
                                    your business opertions in UK
                                </p>
                            </div>
                        </div>
                        <div className="mt-30">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4">
                                    <OfferReverse />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="text-center mb-70">
                            <h2 className="color-brand-1 mb-20">To save you cost & time we finish your<br className="d-none d-xl-block" /> top noche projects before timeline.</h2>
                        </div>
                        <div className="row mt-50 mb-100">
                        <div className="col-lg-7 text-center position-relative mb-30"><img src="/assets/imgs/page/homepage1/Insead-Tech-Blob-Shapes-(Full-stack-web-developer).png" alt="iori" />
                                <div className="shape-1 box-image-4"><img src="/assets/imgs/page/homepage7/chart.png" alt="iori" /></div>
                                <div className="box-number-business shape-3">
                                    <div className="cardNumber bg-white">
                                        <h3>25k+</h3>
                                        <p className="font-xs color-brand-1">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag"> Full-Stack Web Developement Software House </span>
                                <h3 className="color-brand-1 mt-10 mb-15">Insead Tech design &amp; deploy award-winning Websites &amp; App for your business.</h3>
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
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Proposal </Link><a className="btn btn-default font-md-bold hover-up" href="#">+44 349504045
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                        </div>
                        <div className="row mb-0 mt-50 project-revert">
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag">Best UK Based Shopify Services</span>
                                <h3 className="color-brand-1 mt-10 mb-15">Build Your Shopify Store and Reach Out to millions Of Customers</h3>
                                <p className="font-md color-grey-400">Attention online entrepreneurs! Are you looking for a way to grow your business? Look no further than the top Shopify agencies in the UK! With expert Shopify development services, you can build a store that reaches millions of customers in 2023 and beyond. Don't miss out on the chance to boost your online presence and grow your business. </p>
                                <div className="mt-20">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Shopify Ecom Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Custom Shopify Template
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Shopify Themes Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Shopify API Integration
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Shopify Maintenance
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Shopify App Customization
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Proposal</Link><a className="btn btn-default font-md-bold hover-up" href="#">+44 349504045
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                            <div className="col-lg-7 text-center position-relative mb-30"><img src="/assets/imgs/page/homepage1/Insead-Tech-Blob-Shapes-(Shoppify).png" alt="iori" />
                                <div className="shape-1 box-image-4"><img src="/assets/imgs/page/homepage7/chart.png" alt="iori" /></div>
                                <div className="box-number-business shape-3">
                                    <div className="cardNumber bg-white">
                                        <h3>25k+</h3>
                                        <p className="font-xs color-brand-1">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom" />
                </section>

                
                <section className="section mt-10 pt-20 pb-30">
                    <div className="container">
                        <div className="bg-brand-1 box-cover-video">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/homepage1/img-video.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Web Development UK Based Agency</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">Build an Impactful Website with our Bespoke Digital Solutions</h3>
                                        <p className="font-md color-white">Our UK-based agency's web audit service provides valuable insights to optimize website functionality, user engagement, and conversions. Count on us to pinpoint potential improvements and boost your online visibility.</p>
                                        <div className="box-button-offer">
                                                <Link className="btn btn-default font-md-bold pl-0 color-brand-2" href="contact">
                                                    Get Free Audit
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

                
                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="row mt-50 mb-100">
                        <div className="col-lg-7 text-center position-relative mb-30"><img src="/assets/imgs/page/homepage1/Insead-Tech-Blob-Shapes-(Magento).png" alt="iori" />
                                <div className="shape-1 box-image-4"><img src="/assets/imgs/page/homepage7/chart.png" alt="iori" /></div>
                                <div className="box-number-business shape-3">
                                    <div className="cardNumber bg-white">
                                        <h3>25k+</h3>
                                        <p className="font-xs color-brand-1">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag"> Magento Web Development Software House</span>
                                <h3 className="color-brand-1 mt-10 mb-15">Invest in our Expertise and Bring your Business to New Heights!</h3>
                                <p className="font-md color-grey-400">Our top-rated Magento web development agency specializes in delivering bespoke and top-tier custom Magento web development solutions, ensuring that your e-commerce platform stands out in the crowded digital marketplace.</p>
                                <div className="mt-20">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Custom Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>PSD to Magento
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Extension Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Issues & Bug Fixes
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Migration & Upgradation
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Maintenance
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Proposal </Link><a className="btn btn-default font-md-bold hover-up" href="#">+44 349504045
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                        </div>
                        <div className="row mb-0 mt-50 project-revert">
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag">Woocommerce Web Development Software House</span>
                                <h3 className="color-brand-1 mt-10 mb-15">Expert Woocommerce Development for Exceptional E-commerce Success</h3>
                                <p className="font-md color-grey-400">Welcome to our Woocommerce Web Development Software House, where we specialize in delivering custom and top-notch Woo Commerce development services for your online store. Our expert team of developers has a deep understanding of the e-commerce industry and offers bespoke solutions for e-commerce website development UK. Trust us to bring your e-commerce vision to life with our innovative and seamless Woocommerce development services.</p>
                                <div className="mt-20">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>WooCommerce Web Design
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>WooCommerce 3rd party Integrations
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>WooCommerce Custom Theme Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>WooCommerce Plugin Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>WooCommerce Extension Development
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>PSD to WooCommerce
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Proposal</Link><a className="btn btn-default font-md-bold hover-up" href="#">+44 349504045
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                            <div className="col-lg-7 text-center position-relative mb-30"><img src="/assets/imgs/page/homepage1/Insead-Tech-Blob-Shapes-(WooCommerce).png" alt="iori" />
                                <div className="shape-1 box-image-4"><img src="/assets/imgs/page/homepage7/chart.png" alt="iori" /></div>
                                <div className="box-number-business shape-3">
                                    <div className="cardNumber bg-white">
                                        <h3>25k+</h3>
                                        <p className="font-xs color-brand-1">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom" />
                </section>

                <section className="section mt-20  bg-4 pt-40 pb-40">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 ">
                                <h2 className="color-brand-1 mb-20">Our results is your satisfaction </h2>
                                <p className="font-lg color-gray-500">
                                Insead Tech is a web development, design and SEO company with proven results.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link className="btn btn-default font-md-bold pl-0" href="contact">
                                   Read More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-50 align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 align-items-center">
                            <div className="card-plan hover-up">
                            <div className="text-center">
                                <img src="assets\imgs\page\homepage1\Insead Tech-Web Badges-Revision.jpg" alt="iori" height='800px' />
                            
                             </div> 
                                                        

                                   
                                 </div>
                            </div>
                       
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="row ">
                             <div className="text-center">
                            
                                  </div>
                                <div className="card-plan hover-up">
                                <h3 className="color-brand-1 text-center">Our Certification </h3>
                                <div className="border-bottom" />
                                    <div className="text-center">
                                        
                                            <img src="assets\imgs\page\homepage1\Insead-tech-logo-feature-2.jpg" alt="iori" />
                                    </div>
                                    
                                 </div>

                                 <div className="text-center">
                            
                            </div>
                          <div className="card-plan hover-up">
                          <h3 className="color-brand-1 text-center">Featured In </h3>
                            <div className="border-bottom" />
                              <div className="text-center">
                                 <img src="assets\imgs\page\homepage1\Insead-tech-logo-feature-1.jpg" alt="iori"  />
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
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-md-bold pl-0">Contact Us
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-50 mb-100">
                            <div className="col-xl-4 col-lg-5">
                                <ul className="list-faqs nav nav-tabs" role="tablist">
                                    <li><a className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)} ><span>General Support</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Shopify</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>WooCommerce</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 4 ? "active" : ""} onClick={() => handleOnClick(4)}><span>Magento</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                    <li><a className={activeIndex === 5 ? "active" : ""} onClick={() => handleOnClick(5)}><span>Your Account</span>
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></a></li>
                                </ul>
                                <div className="mt-80 text-start mb-40"><Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><a className="btn btn-default font-md-bold hover-up" href="#">Support Center
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="tab-content tab-content-slider">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <AccordionShopify />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <AccordionWoocom  />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <AccordionMagento />
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
                
                <section className="section mt-50 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-4 text-start pt-40">
                                <div className="row">
                                    <div className="col-md-9"><img className="mb-30" src="assets/imgs/page/homepage2/customer.png" alt="iori" /></div>
                                </div>
                                <h2 className="color-brand-1 mb-20">What our customers are saying</h2>
                                <p className="font-lg color-gray-500">Hear from our users who have saved thousands on their Startup and SaaS solution spend.</p>
                                <div className="mt-20"> <a className="btn btn-default font-md-bold pl-0">View All
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
                <section className="section mt-50 bg-1 pt-40 pb-40">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Award Winning</h2>
                                <p className="font-lg color-gray-500">
                                Design Aand Developement 
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link className="btn btn-default font-md-bold pl-0" href="contact">
                                    Get Quoted
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-50">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up ">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="row mt-50">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up ">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                            <img src="assets\imgs\page\homepage1\HAIRMAX_.png" alt="iori" />
                                    </div>
                                    <div className="text-center">
                                        <span className="font-lg-bold color-brand-1">HAIRMAX</span>
                                        <br />
                                        <span className="font-xs color-grey-500">E-COMMERCE</span>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                           Visit Demo
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>

                <section className="section mt-50">
                        <div className="box-radius-32-style-2">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <span className="title-line line-48">Get Started</span>
                                    <h1 className="color-brand-1 mb-20 mt-10">
                                        Start to a get <br className="d-none d-lg-block" />Free web audit
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p className="font-md color-grey-500">
                                            Insead Technologies is committed to building long-lasting relationships with clients through open communications and collaboration.
                                            </p>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className="col-lg-5 text-start position-relative">
                                    <span className="arrow-down-banner shape-1" /><span className="arrow-right-banner shape-2" />
                                    <div className="box-signup">
                                        <h4 className="color-brand-1 mb-30">Sign up for free</h4>
                                        <div className="form-group mb-25">
                                            <label className="font-sm color-grey-900 mb-10">Your email *</label>
                                            <input className="form-control" type="text" placeholder="stevenjob@gmail.com" />
                                        </div>
                                        <div className="form-group mb-25">
                                            <label className="font-sm color-grey-900 mb-10">Your password</label>
                                            <input className="form-control" type="password" placeholder="********" />
                                        </div>
                                        <div className="form-group mb-25">
                                            <label>
                                                <input className="form-cb" type="checkbox" />Remeber me
                                            </label>
                                        </div>
                                        <div className="form-group mb-25">
                                            <Link className="btn btn-border btn-full signin-google" href="#">
                                                Sign in</Link>
                                        </div>
                                        <div className="text-already text-center">
                                            <span className="font-xs color-grey-400">Already have an account? </span><Link className="color-brand-1 font-xs" href="#">Sign in</Link><span className="font-xs color-grey-400">.</span>
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
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-md-bold pl-0">View All
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
                                            <div className="box-button-more text-end"><a className="btn btn-default font-md-bold" href="blog-detail">Learn More
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
                                            <div className="box-button-more text-end"><a className="btn btn-default font-md-bold" href="blog-detail">Learn More
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
                                    <p className="font-md color-grey-500">Sign up for Insead Tech to receive all the new features and offers regarding the web and app development and marketing related services that you might have. Simply type in your email address and we’ll include you in our next update.</p>
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

                
            {/* <section className="section banner-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5">
                                <div className="box-banner ">
                                    <span className="title-line line-48">Think. Creative. Solve</span>
                                    <h3 className="h1_gradeint mb-20 pb-20 pt-20"> <TypeWriter data={typeWriter} /></h3>
                                            <p className="color-black-500 font-md">Insead Tech adopts and implements industry-leading techniques to get found more often in search engines</p>
                                            <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Proposal </Link><a className="btn btn-default font-md-bold hover-up" href="#">Contact us
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a>
                                            </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-7 d-none d-xl-block">
                                <div className="box-banner-home11">
                                    <div className="box-swiper">
                                        <div className="banner-slide-11" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/Insead-Tech-Web-Development-Banner-Theme-3.jpg)' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </section> */}
            </Layout>

        </>
    );
};

export default HomePage1;