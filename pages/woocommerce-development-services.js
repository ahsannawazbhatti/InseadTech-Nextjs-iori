import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Accordion from '../components/elements/AccordionWoocom';

const woocommercePage = () => {
    const [pricing, setPricing] = useState(1);

    const handlePricing = (index) => {
        setPricing(index); // remove the curly braces
    };
    const [social, setSocial] = useState(1);

    const handleSocial = (index) => {
        setSocial(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>WooCommerce Developement Services - Insead Technology</title>
            </Head>

            <Layout>
            <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="color-brand-1 mb-20">WooCommerce Developement Services</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500">WooCommerce is an open-source WordPress plugin that simplifies the process of setting up and maintaining e-commerce websites. At Insead Technologies, we provide top-grade WooCommerce development services that support online business growth. Our developers have vast expertise in developing superior e-commerce websites. Our strict development procedure ensures that you get an end product tailored to your needs. We can assist you whether you require a basic online store or a sophisticated e-commerce platform with cutting-edge features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block"><img src="assets\imgs\page\woo-dev\woocommerce-development.png" alt="iori" /></div>
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

                <section className="section mt-50">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-50 ">What WooCommerce Offers?  </h2>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="card-radius-32">   
                                <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Customize and Extend</h3>
                                        <p className="font-md color-grey-500 mb-20">Track, manage, and control your expenses. The only financial management tool you’ll ever need.</p>
                                        <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                    
                                <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                                 
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-4">
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/automated.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Offer flexible, secure payments</h3>
                                        <p className="font-md color-grey-500 mb-20">Synchronize and automate all your business in the cloud. Save time and effort, enjoy great vacations.</p>
                                        <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="card-radius-32">
                                    <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Manage orders on the go</h3>
                                        <p className="font-md color-grey-500 mb-20">Track, manage, and control your expenses. The only financial management tool you’ll ever need.</p>
                                        <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-20">
                    <div className="container">
                        <div className="row mt-50 align-items-center card-no-border">
                            <div className="col-lg-6 mb-30">
                                <div className="title-line mb-10">We develop and design Woocommerce stores. </div>
                                <h2 className="color-brand-1">Our WooCommerce Services Includes</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/woo-dev/Insead-Tech-Icons-Plugin-Development.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" "> WooCommerce Plugin Development</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Insead Technologies provide high-quality WooCommerce plugin development services to businesses looking to enhance their e-commerce store functionality. Our team of developers works closely with clients to understand their business needs and create custom plugins that meet those needs. We offer a full range of WooCommerce plugin development services, from conception to execution. We use the latest technologies and e-commerce development strategies to ensure that our plugins are optimized for speed and security. </p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src=" assets/imgs/page/woo-dev/Insead-Tech-Icons-3rd-Party.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">3rd party API Integrations</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Integration with third-party services & tools using WooCommerce is a game-changer for businesses who want to simplify their e-commerce processes. If you want to own a highly-functional store with advanced features, we can assist you with the extensions whether it is a complex payment gateway integration or CRM integration. To improve e-commerce performance, you can link your online store with third-party services with the assistance of Insead Technologies, a company that specializes in WooCommerce development.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/woo-dev/Insead-Tech-Icons-Web-Design.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">WooCommerce Web Design</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">For businesses wishing to prosper online in the current digital era, having a user-friendly website is essential. Insead Technologies is an expert in WooCommerce web design services that aids companies in the UK in standing out from the crowd.  Before creating a design that shows your company's core values; we first understand the goals of your business. Custom woocommerce themes, user experience design, responsive design, and conversion rate optimization are all parts of our WooCommerce site design offerings.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/woo-dev/Insead-Tech-Icons-Custome-Theme.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">WooCommerce Custom Theme Development</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Using WooCommerce has several benefits, one of which is its support for the creation of custom themes. At Insead Technologies, we recognize the value of e-commerce development strategies that may support companies in achieving their online sales targets. Our Custom theme development services use potent tactics that help firms to design aesthetically pleasing, user-friendly, & search engine-optimized e-commerce websites with advanced functionality. Discover how we can help you develop custom WooCommerce themes.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/woo-dev/Insead-Tech-Icons-Extension.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">WooCommerce Extension Development</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">WooCommerce is a powerful e-commerce platform that provides businesses with several features and functionality. Yet, some businesses need extra functionality that is not built-in by default. At Insead Technologies, we specialize in providing WooCommerce extension development services to assist UK-based companies in expanding their e-commerce stores. By using this method, businesses can enhance their online store's customer experiences, boost sales, and boost revenue by adding unique functions and integrations.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/woo-dev/Insead-Tech-Icons-PSD-to-WooCom.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">PSD to WooCommerce</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">The user experience of an online store is improved with PSD to WooCommerce conversion services. Businesses can increase the likelihood of a sale by creating an intuitive buying experience for their customers by building the website with user-friendliness in mind. As a top e-commerce development agency in the UK, we specialize in PSD to WooCommerce conversion services. Your PSD designs can be transformed by our team of skilled developers into a fully-customizable, responsive, and functional WooCommerce website.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/woo-dev/Insead-Tech-Icons-Maintenance.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">WooCommerce Maintenance and Support</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Insead Technologies offers WooCommerce maintenance and support services to businesses in the UK to make sure their online store is up-to-date with the latest versions of WooCommerce and other software components. This is important as outdated software can leave your online stores vulnerable to security threats and other issues. We will help prevent downtime and ensure that your online store is always available to customers. Regular updates, security monitoring, backup, and restore are all part of our services.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-button text-center mt-10"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><Link className="btn btn-default font-md-bold hover-up" href="#">
                            Learn More
                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg></Link></div>
                    </div>
                </section>

                <div className="section">
                <div className="container">
                        
                <div className="col-xl-12 mt-60 mb-20">
                                <div className="card-radius-32 bg-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30">
                                                <span className="title-line line-48">Woocommerce Store</span>
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                Develop an interactive Store<br className="d-none d-lg-block" /> With Insead Tech!. 
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                An interactive online store is a feature that engages customers and provides them with an immersive shopping experience. By building it, firms can differentiate themselves from the competition and increase customer loyalty.
                                                 It can also help increase sales and revenue by giving customers an easier shopping experience. We use new techniques to ensure that our clients' online stores are fast, secure, and convenient.
                                                 Our stores are optimized for mobile devices, ensuring customers can shop from anywhere at any time.
                                                
                                                </p>
                                                <div className="mt-10">
                                                
                                                    Contact us now to discuss how we can help you setup website for your business.
                                                        
                                                </div>
                                                <div className="mt-40 text-start">
                                                    <Link className="btn btn-brand-1 hover-up" href="/help"> Get Free Quote</Link><Link href="#" className="btn btn-default font-md-bold hover-up" >Learn More
                                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="/assets/imgs/page/homepage9/img3.png" alt="iori" />
                                                <div className="shape-1 box-image-4">
                                                    <img src="/assets/imgs/page/homepage9/testimonial.png" alt="iori" />
                                                </div>
                                                <div className="box-number-business shape-3">
                                                    <div className="cardNumber bg-white">
                                                        <h3>25k+</h3>
                                                        <p className="font-xs color-brand-1">Get More Clients</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>                
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                                        <span className="font-xs color-grey-500">Woocommerce Store</span>
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
                

                <section className="section mt-100 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 text-start pt-50"><span className="title-line line-48">Testimonials</span>
                                <h2 className="color-brand-1 mb-20 mt-15">What our clients<br className="d-none d-lg-block" />say about us</h2>
                                <div className="row">
                                    <div className="col-lg-10">
                                        <p className="font-md color-gray-500 mb-30">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 bg-testimonials position-relative">
                                <div className="ml-20">
                                    <div className="card-testimonial-list">
                                        <div className="d-flex align-items-center">
                                            <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                                <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                            </div>
                                            <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                        </div>
                                        <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    </div>
                                </div>
                                <div className="ml-100">
                                    <div className="card-testimonial-list">
                                        <div className="d-flex align-items-center">
                                            <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author2.png" alt="iori" /></Link>
                                                <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                            </div>
                                            <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /></div>
                                        </div>
                                        <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    </div>
                                </div>
                                <div className="card-testimonial-list">
                                    <div className="d-flex align-items-center">
                                        <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author3.png" alt="iori" /></Link>
                                            <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                        </div>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /></div>
                                    </div>
                                    <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 bg-grey-80 bg-plan pt-110 pb-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                                <p className="font-lg color-gray-500">
                                    Pick your plan. <br className="d-none d-lg-block" /> Change whenever you want.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link className="btn btn-default font-md-bold pl-0" href="contact">
                                   Get Tailored Plan
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-1">
                                            <img src="assets/imgs/page/homepage1/standard.svg" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Standard</h4>
                                            <p className="font-md color-grey-400">Advanced project</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">$29</span>
                                        <span className="font-md color-grey-500">
                                            - user / month
                                            <br />
                                        </span>
                                        <span className="font-xs color-grey-500">Billed annually</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                            Get Started
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-plan card-plan-2 hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-2">
                                            <img src="assets/imgs/page/homepage1/business.svg" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Business</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">$99</span>
                                        <span className="font-md color-grey-500">- user / month</span>
                                        <br />
                                        <span className="font-xs color-grey-500">One-time pay</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                            Get Started
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-3">
                                            <img src="assets/imgs/page/homepage2/creation.png" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Enterprise</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">$299</span>
                                        <span className="font-md color-grey-500">- user / month</span>
                                        <br />
                                        <span className="font-xs color-grey-500">One-time pay</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Snapchat Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                TikTok Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">
                                            Get Started
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

                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-info-video">
                                        <span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a WooCommerce expert?</h2>
                                        <p className="font-md color-grey-500">Insead Technologies is committed to building long-lasting relationships with clients through open communication and collaboration. Whether you have a comment, or just want to learn more about us, our team is here to help.</p>
                                        <div className="box-button text-start mt-65">
                                            <Link className="btn btn-brand-1 hover-up" href="#">
                                                Contact Us
                                            </Link>
                                            <Link className="btn btn-default font-md-bold hover-up" href="#">
                                                Support Center
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
                
                <section className="section pt-80 mb-30">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                            <p className="font-lg color-gray-500">
                                Feeling inquisitive? Have a read through some of our FAQs or
                                <br className="d-none d-lg-block" /> contact our supporters for help
                            </p>
                        </div>
                        <div className="row mt-50 mb-50">
                            <div className="col-xl-2 col-lg-2" />
                            <div className="col-xl-8 col-lg-8 position-relative">
                                <div className="box-author-1">
                                    <img src="assets/imgs/page/homepage6/author.png" alt="iori" />
                                </div>
                                <div className="box-author-2">
                                    <img src="assets/imgs/page/homepage6/author2.png" alt="iori" />
                                </div>
                                <div className="box-author-3">
                                    <img src="assets/imgs/page/homepage6/author3.png" alt="iori" />
                                </div>
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-50" />
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog </h2>
                                <p className="font-lg color-gray-500">
                                    Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.
                                    <br className="d-none d-lg-block" />
                                    Aenean vulputate sodales urna ut vestibulum
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link className="btn btn-default font-md-bold pl-0" href="blog">
                                    View All
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage2/news1.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">Easy Ways to Make Money While You Sleep</h6>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                Technology
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2022
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage2/news2.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">Tiktok video size guide: Everything you need to know</h6>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                Marketting
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2022
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage1/news2.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">How to convert video to MP4 for free online</h6>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                Media
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2022
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage2/news3.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h6 className="color-brand-1">5 fastest ways to increase search engine rankings</h6>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">
                                                SEO
                                            </Link>
                                            <span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2022
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
            </Layout>

        </>
    );
};

export default woocommercePage;