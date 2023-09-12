import Link from "next/link";
import Head from 'next/head';
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ModalVideo from 'react-modal-video';

const HRMS_Page = () => {
    const [pricing, setPricing] = useState(1);
    const [isOpen, setOpen] = useState(false)

    const handlePricing = (index) => {
        setPricing(index);
    };

    return (
        <>
            <Head>
                <title>Human Resource Management System - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-brand-2">we’re Committed to enlightening your workload by reducing time and paperwork</span>
                                    <h2 className="color-brand-2 mt-10">Human Resource Management System</h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-grey-50">Connect Human Resource Management System HRMS is today’s most comprehensive, fully customized and featured HR management solution for every type of businesses. We help you to improve effectiveness and efficiency of your work and make better decisions across all your key HR tasks.</p>
                                    <p className="font-md color-grey-50"></p>
                                </div>
                            </div>
                            <div className="box-video-banner">
                                <div className="image-banner-5">
                                    <img src="assets/imgs/page/homepage5/banner.png" alt="IORI" />
                                    <span className="btn btn-play-center popup-youtube" onClick={() => setOpen(true)} />
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                            <div className="box-info-video-banner">
                                <div className="box-inner-video-banner">
                                    <div className="row align-items-start">
                                        <div className="col-lg-5">
                                            <p className="color-grey-500 font-lg">Insead HRMS provides all the functions need to meet the organizational requirements of an HR department, Finance Department and Management Section. A system consists of Employees profile management, Attendance log, payroll handling, leave management and task manager. Bio-metric Attendance, Auto Generated Payroll and Human Resource management system HRMS.</p>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card-small card-small-2">
                                                        <div className="card-image">
                                                            <Link href="#">
                                                                <div className="box-image">
                                                                    <img src="assets/imgs/page/homepage1/free.svg" alt="iori" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link href="#">
                                                                <h6 className="color-brand-1 mb-10">Connected</h6>
                                                            </Link>
                                                            <p className="font-xs color-grey-500">We come together wherever we are – across time zones, regions, offices and screens. You will receive support from your teammates anytime and anywhere.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-small card-small-2">
                                                        <div className="card-image">
                                                            <Link href="#">
                                                                <div className="box-image">
                                                                    <img src="assets/imgs/page/homepage2/identity.png" alt="iori" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link href="#">
                                                                <h6 className="color-brand-1 mb-10">Flexible</h6>
                                                            </Link>
                                                            <p className="font-xs color-grey-500">We believe in your freedom to work when and how you work best, to help us all thrive. Only freedom and independent work can bring out the best in you.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container box-business-rd">
                        <div className="row align-items-end ">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">HRMS FEATURES</h2>
                            </div>
                            
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Integrated HR Solution</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead HRMS provides small and medium companies with affordable Human Resource solutions which are typically only accessible by large organizations.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Biometric Attendance</h4>
                                        <p className="font-md color-grey-500 mb-15">The most appealing utilization of bio-metric attendance system is that it doesn’t permit your workers to make you trick in respects of presence and timings.</p>
                                         
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Expense Manager</h4>
                                        <p className="font-md color-grey-500 mb-15">Administrator module that uses wizards, symbols, diagrams, graphs, charts and an instinctive, stream situated interface to help get an exact photo of your finance.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Employee Profile Management</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead HRMS give cloud-based profile management module to record detailed information of employees.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Leave Management</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead HRMS leave management solution on the cloud can address leave management needs of any organization, be it little or huge. </p>
                                         
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Document Management </h4>
                                        <p className="font-md color-grey-500 mb-15">Document management is an exhaustive module intended to offer you some assistance with creating and deal with a paperless office.</p>
                                         
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Employee Self-Service </h4>
                                        <p className="font-md color-grey-500 mb-15">Employee Self Service (ESS) offers a solitary, secure hotspot for people to deal with their personal data. </p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Mobility Access</h4>
                                        <p className="font-md color-grey-500 mb-15">You can access all the features of HRMS with the help of this mobility feature everywhere anywhere with help mobile or tablet.</p>
                                          
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Task Manager</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead HRMS provide featured task manager module which let you add tasks, sub-tasks, projects and team members over the cloud.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Multi Organizations </h4>
                                        <p className="font-md color-grey-500 mb-15">Insead HRMS provide an extensive feature to run the application in multiple organization at the same time.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Effortless Payroll</h4>
                                        <p className="font-md color-grey-500 mb-15">It is an electronic distribution framework for pay advice data that allows employers to dispense the salaries of their employees very easily.</p>
                                          
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage1/cross6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-15">Instant Report Generator</h4>
                                        <p className="font-md color-grey-500 mb-15">Insead HRMS report generator module provide the advantage of processing all accounting modules on a monthly/yearly basis.</p>
                                         
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="box-container">
                            <div className="row mb-0 mt-40 project-revert align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6 mt-30">
                                    <span className="btn btn-tag">Modules</span>
                                    <h2 className="color-brand-1 mt-10 mb-15">Human Resource Management System Modules</h2> 
                                    <ul className="list-core-value list-core-value-white">
                                        <li>
                                        <span className="ticked" />
                                        Complete Recruitment Solution.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Employees Self Service.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Effortless Auto Generated Payroll.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Employee Bio-metric Attendance.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Extensive Leaves Management.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Employee Profile Management.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Dynamic Dashboards.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Documents Management.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6 mt-30">
                                    <div className="box-images-cover text-end">
                                        <div className="box-images-inner">
                                            <img className="img-project bd-rd16" src="assets/imgs/page/homepage5/img-project2.png" alt="iori" />
                                            <div className="image-7 shape-3">

                                                <img src="assets/imgs/page/homepage1/finger.png" alt="iori" />
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
                        <div className="row mt-70">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage1/news1.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h4 className="color-brand-1">The smart way to grow your money while you sleep</h4>
                                        </Link>
                                        <div className="mt-20">
                                            <span className="date-post font-xs color-grey-300">
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
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus. Fusce varius vel velit commodo consectetur. Aliquam sodales posuere neque, eget placerat libero fermentum nec. Fusce malesuada laoreet enim, ut convallis odio eleifend vitae.</p>
                                        <div className="mt-20 d-flex">
                                            <div className="box-author">
                                                <Link href="#">
                                                    <img src="assets/imgs/page/homepage1/author.png" alt="iori" />
                                                </Link>
                                                <div className="author-info">
                                                    <Link href="#">
                                                        <span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span>
                                                    </Link>
                                                    <span className="font-xs color-grey-500 department">Bank of America</span>
                                                </div>
                                            </div>
                                            <div className="box-button-more text-end">
                                                <Link className="btn btn-default font-sm-bold" href="blog-detail">
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
                            <div className="col-lg-4 col-md-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage1/news2.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h4 className="color-brand-1">Helpful Tips for Working from Home as a Freelancer</h4>
                                        </Link>
                                        <div className="mt-20">
                                            <span className="date-post font-xs color-grey-300">
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
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus. Fusce varius vel velit commodo consectetur. Aliquam sodales posuere neque, eget placerat libero fermentum nec. Fusce malesuada laoreet enim, ut convallis odio eleifend vitae.</p>
                                        <div className="mt-20 d-flex">
                                            <div className="box-author">
                                                <Link href="#">
                                                    <img src="assets/imgs/page/homepage1/author.png" alt="iori" />
                                                </Link>
                                                <div className="author-info">
                                                    <Link href="#">
                                                        <span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span>
                                                    </Link>
                                                    <span className="font-xs color-grey-500 department">Bank of America</span>
                                                </div>
                                            </div>
                                            <div className="box-button-more text-end">
                                                <Link className="btn btn-default font-sm-bold" href="blog-detail">
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
                            <div className="col-lg-4">
                                <ul className="list-blogs">
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">How to make a great impression from the first moment</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm1.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">We can blend colors multiple ways, the most common</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm2.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">How To Blow Through Capital At An Incredible Rate</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm3.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">Design Studios That Everyone Should Know About?</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm4.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center">
                                    <span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
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

export default HRMS_Page;
