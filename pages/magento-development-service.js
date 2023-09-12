import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Accordion from '../components/elements/AccordionMagento';

const magentoPage = () => {
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
                <title>Magento Developement Services - Insead Technology</title>
            </Head>

            <Layout>
            <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="color-brand-1 mb-20">Magento Developement Services</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500">Magento is a popular and powerful open-source e-commerce platform used by millions of businesses worldwide. Insead Technologies is a leading Magento web development agency in the UK, specializing in creating custom e-commerce websites that meet the unique needs of businesses. We provide end-to-end solutions that include design, development, integration, & support services. Our team of certified Magento developers has years of experience working with businesses of all size to understand their business goals and enhances user experience. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block"><img src="assets/imgs/page/SEO/seo1.png" alt="iori" /></div>
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
                                <h2 className="color-brand-1 mb-50 ">What Magento Offers?</h2>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="card-radius-32">   
                                <div className="card-info">
                                        <h3 className="color-brand-1 mb-20">Operational confidence</h3>
                                        <p className="font-md color-grey-500 mb-20">You can maintain the consistency of your website, without any downtime, errors, or insecurity.</p>
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
                                        <h3 className="color-brand-1 mb-20">Intelligent Commerce</h3>
                                        <p className="font-md color-grey-500 mb-20">Via using advanced technologies, you can provide your customers with relevant & engaging experiences.</p>
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
                                        <h3 className="color-brand-1 mb-20">Integrated B2B functionality</h3>
                                        <p className="font-md color-grey-500 mb-20">A B2B solution can simplify ordering processes, support multiple roles, & helps pricing plans.</p>
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
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag">Magento Developement in UK</span>
                                <h3 className="color-brand-1 mt-10 mb-15">Design & deploy  world-class app for your business opertions</h3>
                                <p className="font-md color-grey-400">Being one of the top Magento web development companies, we create distinctive solutions that adhere to your branding, design, and functionality requirements. With custom extensions that are tailored to your company's requirements, we can help you increase the functionality of your Magento store. To stay current and perform at its best, we adhere to best practices, uphold transparency throughout the development process, and offer continuous support and maintenance. Overall, we place a high priority on quality and customer satisfaction.</p>
                               
                                <div className="mt-50 text-start"> <Link className="btn btn-brand-1 hover-up" href="#">Get Free Quote </Link><a className="btn btn-default font-sm-bold hover-up" href="#">Learn More.
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                        </div>
                        <div className="row mb-100 mt-50 project-revert">
                            <div className="col-xl-5 col-lg-6"> <span className="btn btn-tag">Why choose Magento?</span>
                                <h3 className="color-brand-1 mt-10 mb-15">Build your brand and reach out to social followers</h3>
                                <p className="font-md color-grey-400">Magento is the ideal option if you're searching for a strong, scalable, and flexible e-commerce platform. It has emerged as the preferred platform for companies of all sizes thanks to its strong architecture, rich feature set, & adaptable customization options. As a Magento web development company, we are experts in delivering services that may help you grow your e-commerce company. Magneto can handle all of your needs, whether you're a tiny firm just getting started or a large company with hundreds of products. Its adaptable architecture makes it simple to scale as your business develops and evolves. Let us help you build or upgrade your store from scratch.</p>
                            
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

                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Our Magento Services Includes</h2>
                            </div>
                        </div>
                        <div className="row mt-50">

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Custom Development</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">If a firm wants to stay competitive, custom Magento web development is key to its goals. Our services will strengthen your e-commerce operation.</p>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">PSD to Magento</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">At Insead Technologies, our developers are here to transform your Photoshop design file (PSD) into a fully-functional Magento ecommerce website.</p>
                                        </div>
                                    </div>
                                </div>   
                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Extension Development</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">We at InseadTech help create custom functionalities to integrate into existing Magento platforms, rangings from add-ons to complex integrations.</p>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Issues & Bug Fixes </Link></h4>
                                            <p className="font-md color-grey-500 mb-5">We work closely with clients to identify and fix any simple or complex issues to ensure their e-commerce platform remains stable and functional.</p>
                                        </div>
                                    </div>
                                </div>
                                   
                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Migration & Upgradation</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">By using our expert services, businesses can make sure that their e-commerce platform remains secure, up-to-date, and optimized for performance.</p>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Maintenance</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">Whether it is checking for security vulnerabilities, optimizing code, or updating plugins and extensions, we help you with all of your projects.</p>
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
                                <Link className="btn btn-default font-sm-bold pl-0" href="contact">
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <span className="font-xs color-grey-500">Mangento Store</span>
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a Mangento expert?</h2>
                                        <p className="font-md color-grey-500">Insead Technologies is committed to building long-lasting relationships with clients through open communication and collaboration. Whether you have a comment, or just want to learn more about us, our team is here to help.</p>
                                        <div className="box-button text-start mt-65">
                                            <Link className="btn btn-brand-1 hover-up" href="#">
                                                Contact Us
                                            </Link>
                                            <Link className="btn btn-default font-sm-bold hover-up" href="#">
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
                                <Link className="btn btn-default font-sm-bold pl-0" href="blog">
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

export default magentoPage;