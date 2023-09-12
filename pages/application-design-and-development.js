import Link from "next/link";
import Head from 'next/head';
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Accordion from '../components/elements/Accordion';

const applicationReEngineeringPage = () => {
    const [isOpen, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>Application design and development- Insead Technology</title>
            </Head>

            <Layout>
            <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                <h1 className="color-brand-1 mb-20 mt-5">Application <br/>Developement</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                        <p className="font-md color-grey-500 mb-30">Application development is a crucial aspect of modern business operations. As more and more consumers turn to mobile devices, having a well-functional app is becoming increasingly important for companies to stay competitive. This is where Insead Technologies, an app design and development company based in the UK, can help. We specialize in creating innovative & user-friendly applications that meet the needs of our clients. Using the latest tools and technologies, we ensure your apps are fast, reliable, and easy to use. We also conduct rigorous testing to ensure that our apps are bug-free and provide a seamless user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block"><img src="assets\imgs\page\app-eng\app-re-eng-png-2.png" alt="QUALITY ASSURANCE" /></div>
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

                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Take your social media marketing <br className="d-none d-lg-block" />prowess to the next level</h2>
                            </div>
                        </div>
                     
                        <div className="row mt-50">
                                <div className="col-lg-6 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">iOS App</h4>
                                                <p className="font-md color-grey-500 mb-15">Whether you need an app for e-commerce, healthcare, education, or any other industry, we have the expertise to meet your needs. We can help you with developing an iOS app that engages your users and expands your business.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-3">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Android App</h4>
                                                <p className="font-md color-grey-500 mb-15">With over 2.5 billion active Android devices worldwide, there is a chance to connect with your audience via an Android app. We focus on producing splendid Android apps that are mainly built to meet the needs of your firm.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Wearable App</h4>
                                                <p className="font-md color-grey-500 mb-15">Because of the growth of wearable technology, it is possible to reach or extend a wider audience through wearable apps. Our skilled developers will help develop a unique Android app that is quick, reliable, & easy to use.</p>
                                                <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 social-media personal">
                                    <div className="card-offer-style-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Hybrid App</h4>
                                                <p className="font-md color-grey-500 mb-15">Check out Insead Tech if you want a cutting-edge hybrid app that combines the best of both worlds. We develop unique hybrid apps that combine the features and utility of native apps with the speed and agility of web apps. </p>
                                                <div className="box-button-offer"><a className="btn btn-default font-md-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                </section>                
               
               
                
                <section className="section mt-50 overflow-hidden">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-center mb-30">
                                <div className="box-phones">
                                    <div className="box-phones-inner">
                                        <div className="img-phone-1"><img src="/assets/imgs/page/homepage8/phone1.png" alt="iori" /></div>
                                        <div className="img-phone-2"><img src="/assets/imgs/page/homepage8/phone2.png" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-our-app"><span className="title-line line-48">Why Insead Tech?</span>
                                    <h3 className="color-brand-1 mb-20 mt-15">Launch your Own Mobile App for Any Platform</h3>
                                    <p className="font-sm color-grey-500 mb-40">Insead Tech strives to provide clients with app design and development services that exceed their beliefs. Our apps are fast, reliable, and user-friendly from start to finish. As app developers with many years of experience, we are well-versed in the latest trends, tools, and technologies. With this skill, we build innovative apps that are tailored to our client's needs. </p>
                                    <div className="box-item-comment">
                                        <div className="image-comment"> <img src="/assets/imgs/page/homepage8/author.png" alt="iori" /></div>
                                        <div className="info-comment">
                                            <p className="font-lg-bold color-grey-500 comment-quote mb-15">Working with Insead Technologies was an absolute game-changer for us. I greatly cherish their knowledge & timely delivery of a high-quality product.</p><span className="font-md-bold color-brand-1">Albert Flores</span>
                                            <p className="font-xs color-grey-500">Bank of America</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-50 ">Mobile App Development Technologies</h2>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="card-radius-32">   
                                <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Android App</h3>
                                        <p className="font-md color-grey-500 mb-20">From increased visibility to boosting revenue streams, an Android app can help gain your goals.  </p>
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
                                        <h3 className="color-brand-1 mb-20">iOS App</h3>
                                        <p className="font-md color-grey-500 mb-20">To stay viable in today's digital world, improve user experience and competitiveness with an iOS app.</p>
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
                                        <h3 className="color-brand-1 mb-20">Hybrid apps</h3>
                                        <p className="font-md color-grey-500 mb-20">A hybrid app offers the benefits of native and web apps, giving a more flexible and cheap tool.</p>
                                        <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                    <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="card-radius-32">   
                                <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Backend</h3>
                                        <p className="font-md color-grey-500 mb-20">The backend involves building the infrastructure, databases, & APIs that support the front end.</p>
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
                                        <h3 className="color-brand-1 mb-20">Databases</h3>
                                        <p className="font-md color-grey-500 mb-20">Databases allow quick storage of huge amounts of data. Set up databases suited to your needs.</p>
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
                                        <h3 className="color-brand-1 mb-20">Infrastructure</h3>
                                        <p className="font-md color-grey-500 mb-20">We build connected, scalable infrastructure systems that can alter to fit the needs of today's world.</p>
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

                <section className="section mt-90">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-20">Mobile App Developement Services</h2>
                            <p className="font-lg color-grey-500"> <Link className="font-lg-bold color-brand-1" href="#">Iori Platform </Link>lets you take control of your money, balance your <br className="d-none d-lg-block" />income and expenses, and understand where your money goes.</p>
                        </div>
                        <div className="row mt-75 align-items-center">
                            <div className="col-lg-4 mb-30">
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>UI/UX Design</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon1.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">Our app design and development process includes a full focus on UI/UX design to build an ideal UI/UX with steady iteration, ensuring a positive user experience.</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>Native Mobile App Development</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon2.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">We offer native app design and development for iOS, hybrid, and Android, using the latest tools and technologies to create apps that meet the highest standards.</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-end">
                                        <h6 className="color-brand-1 mb-15"> <span>Hire Mobile App Experts</span><img className="ml-15" src="/assets/imgs/page/homepage8/icon3.png" alt="iori" /></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-end color-grey-500">Whether you need help with native or hybrid app development, UI/UX design, or cloud app development, our experts have the expertise to bring your ideas to life. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30 text-center"><img src="/assets/imgs/page/homepage8/phone2.png" alt="iori" /></div>
                            <div className="col-lg-4 mb-30">
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon5.png" alt="iori" /><span>Cloud App Development</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">We offer cloud app development services that provide you with the flexibility, scalability, and cost-effectiveness you need in today's competitive marketplace.</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon6.png" alt="iori" /><span>Hybrid Mobile App Development</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">With the cross-platform capability of web apps and the functionality of native apps, our hybrid mobile app development services provide the best of both worlds.</p>
                                    </div>
                                </div>
                                <div className="card-become">
                                    <div className="card-title text-start">
                                        <h6 className="color-brand-1 mb-15"> <img className="mr-15" src="/assets/imgs/page/homepage8/icon7.png" alt="iori" /><span>Progressive Web Apps</span></h6>
                                    </div>
                                    <div className="card-desc">
                                        <p className="text-start color-grey-500">Our PWAs are designed to load quickly, function with no internet access, and offer native app-like functionality, making them the perfect choice for companies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom mt-100" />
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <span className="font-xs color-grey-500">Application Store</span>
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to an Application expert?</h2>
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

export default applicationReEngineeringPage;
