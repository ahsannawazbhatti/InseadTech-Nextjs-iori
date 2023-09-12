import Link from "next/link";
import Head from 'next/head';
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ModalVideo from 'react-modal-video';

const FMS_Page = () => {
    const [pricing, setPricing] = useState(1);
    const [isOpen, setOpen] = useState(false)

    const handlePricing = (index) => {
        setPricing(index);
    };

    return (
        <>
            <Head>
                <title>Financial Management System FMS - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-brand-2">SMART FMS SOLUTIONS</span>
                                    <h2 className="color-brand-2 mt-10">Financial Management System FMS</h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-grey-50">Connect complete accounting software Solution integrates with Insead Tech ERP, HRMS and Sales all the way up to power management system. Best Financial Management System and Complete Accounting software includes Cost and Project accounting.
Best FMS Insead Tech FMS improves short and long-term business performance by streamlining invoicing and bill collection, eliminating accounting errors, minimizing record-keeping redundancy, ensuring compliance with tax and accounting regulations, and offering flexibility and expandability to accommodate change and growth. </p>
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
                                            <p className="color-grey-500 font-lg">Insead Tech Financial Management System FMS is the software that an organization uses to oversee and govern its income, expenses, and assets with the objectives of maximizing profits and ensuring sustainability.</p>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">FINANCIAL MANAGEMENT SYSTEM FEATURES</h2>
                                <p className="font-lg color-gray-500">Insead Tech provides on-demand Complete Accounting Software & ERP solutions that support all your back-office<br className="d-none d-lg-block" />
                                 operations. Connect best FMS offers a comprehensive business suite with everything you need in one powerful solution.<br className="d-none d-lg-block" />
                                   With Insead ERP, you can manage Financials, Purchasing, Sales, HR, Attendance and more. The Complete Accounting<br className="d-none d-lg-block" />
                                    software & ERP software system components are well integrated, giving you access toreal-time business<br className="d-none d-lg-block" />
                                     intelligence to make a better decision. And you can automate business process<br className="d-none d-lg-block" />
                                     across the company also can easily handle cost and project accounting.<br className="d-none d-lg-block" />
                                    </p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">General Ledger</h4>
                                            <p className="font-sm color-grey-500 mb-15">General Ledger holds the information of your whole accounts, Statements, assets, liabilities, owner's equity, revenue and expenses.</p>
                                        </div>
                                        <div className="card-image-bottom mt-50"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img.png" alt="iori" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image-bottom mb-35"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Payable & Receivable</h4>
                                            <p className="font-sm color-grey-500 mb-15">Our FMS gives you the full and comprehensive details of the amount that company owns and the amount that company has to pay. </p>
                                            <div className="box-button-offer"><Link className="btn btn-default font-sm-bold pl-0 color-grey-900" href='#'>Contact Us
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-offer card-offer-2 hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage11/social.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Reporting</h4>
                                            <p className="font-sm color-grey-500 mb-15">FMS provides the reports of your invoices, Ledgers, mics expenditures and profit and loss in the form of graphs and charts. </p>
                                        </div>
                                        <div className="card-image-bottom mt-50"> <img className="w-100 bd-rd16" src="assets/imgs/page/homepage11/img3.png" alt="iori" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="box-container">
                            <div className="row mt-50 align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="box-images-cover">
                                        <div className="box-images-inner">
                                            <img className="img-project bd-rd16" src="assets/imgs/page/homepage5/img-project.png" alt="iori" />
                                            <div className="image-6 shape-3">

                                                <img src="assets/imgs/page/homepage5/chart.png" alt="iori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">

                                <span className="btn btn-tag">FMS Benefits</span>
                                    <h2 className="color-brand-1 mt-10 mb-15">Best FMS & Complete Accounting Software </h2>
                                        <ul className="list-core-value list-core-value-white">
                                        <li><span className="ticked" />
                                        Improve decision making with real-time metrics and role-based control panel.
                                        </li>
                                        <li><span className="ticked" />
                                        Improve productivity with greater visibility and more automated back-office processes.
                                        </li>
                                        
                                        <li><span className="ticked" />
                                        Ensure accountability and compliance with robust, audit-able accounting.
                                        </li>
                                        
                                        <li><span className="ticked" />
                                        Graduate from simple desktop accounting packages or from standalone accounting/ERP to powerful Accounting/ERP that’s integrated with ERP and HRMS.
                                        </li>
                                        
                                        <li><span className="ticked" />
                                        Customize and extend IBS Financial Management System (FMS) easily to meet your exact needs.
                                        </li>
                                        
                                        <li>
                                        <span className="ticked" />
                                        It is Flexible enough to cover multiple companies. It can easily manage multiple units of an enterprise.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Consolidate all transaction at any level of accounts or company level.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Distribution of expenses to cost centers and profit centers.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Association of multiple char of account to vendors, customers and employees.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Banks and Check books management.
                                        </li>
                                        <li>
                                        <span className="ticked" />
                                        Supports analytical codes and multi-dimension data entry to have details for any expense, asset , income or work order.
                                        </li> 
                                    </ul>
                                    
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

export default FMS_Page;
