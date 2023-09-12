import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ModalVideo from 'react-modal-video';

const businessIntelligencePage = () => {
    const [isOpen, setOpen] = useState(false)

    const [pricing, setPricing] = useState(1);

    const handlePricing = (index) => {
        setPricing(index); // remove the curly braces
    };

    return (
        <>
            <Head>
                <title>Analytics & Reporting - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-3">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-end">
                                <div className="col-lg-6 pt-80 pb-50"><span className="title-line line-48"><span>Analytics & Reporting</span></span>
                                    <h1 className="color-brand-1 mb-20 mt-15">Grow your business with refines your advertising plan.</h1>
                                    <div className="mt-40 d-flex"><img className="img-banner-1 mr-15" src="assets/imgs/page/homepage3/chart1.png" alt="iori" /><img className="img-banner-2" src="assets/imgs/page/homepage3/chart2.png" alt="iori" /></div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block position-relative">
                                    <div className="box-image-main"><img className="image-banner-main d-block" src="assets/imgs/page/homepage3/banner.png" alt="iori" /></div>
                                    <div className="box-chart"><img className="image-chart shape-1" src="assets/imgs/page/homepage3/chart.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
              
                <section className="section mt-20">
                    <div className="container">
                        <div className="row mt-50 align-items-center card-border">
                            <div className="row mb-30 mt-40 project-revert align-items-center "> 
                                <div className="col-lg-6 mb-30">
                                    <div className="title-line mb-10">What We Do, What You Get</div>
                                    <h2 className="color-brand-1">We track your goals and results.</h2>
                                    <p className="font-md color-grey-500 mb-5">Our vision to Google Analytics, one of the most prevalent and effective analysis tools available, that can be integrated into other services such as Sales force. We can lead to a structural failure in achieving business objectives by ROI for companies who work in Financial Services, Insurance, and Legal Services time is money and not understanding. We focus resources on business objective, inferring the results of both online with SMART plans.Our Analytics and Reporting services are designed to provide the strategic perceptions and trends that will help your executive team incredulous the challenges. GPS Digital Media is a company dedicated to delivering value to our clients by focusing on your needs and being transparent about our role and goals.</p>
                                </div>
                                
                                <div className="col-lg-6 p-45">
                                    <div className="box-images-cover text-end">
                                            <div className="box-images-inner">
                                                <img className="img-project bd-rd16" src="assets\imgs\page\AnR\data-analytics.png" alt="Insead" />
                                                <div className="image-7 shape-3">

                                                    <img src="assets/imgs/page/homepage1/finger.png" alt="iori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">BUSINESS INTELLIGENCE</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Our Business Intelligence software provides the most comprehensive, integrated and easy-to-use reporting and analysis features.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">DASHBOARD AND KPI</Link></h4>
                                        <p className="font-md color-grey-500 mb-5"> Whether it’s internal data or KPIs from third-party services, we aggregate all your relevant data into amazing KPI dashboards.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">ANALYTICS</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">We provide the information you need to apply new BI and analytics technologies to your company to improve performance management.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href=" ">Custom Reporting</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Create your own custom reports to measure and analyze any expense metrics important to your organization.</p>
                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="box-button text-center mt-10"> <Link className="btn btn-default font-sm-bold hover-up" href="#">
                            Learn More
                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg></Link></div>
                    </div>
                </section>

                <section className="section mt-150">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6"><span className="title-line line-48">Why using our app</span>
                                <h3 className="color-brand-1 mb-20 mt-15">Why Analytics and Reporting (Benefits)</h3>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p className="font-sm color-grey-500">Easy to Customize according to the user expectations.Brief and comprehensive so the user does not to check multiple reports. Gives a very detail view to your about your business. Simple Data Presentation no needs any training or hard work. Mostly Mobile Device Responsive that makes easy for you to access.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="box-charts">
                                    <div className="box-chart-1 text-end">
                                        <div className="box-number-2 bg-brand-2">
                                            <h2 className="color-brand-1">30+</h2>
                                            <p className="font-lg color-brand-1">Project Done</p>
                                        </div>
                                    </div>
                                    <div className="box-chart-2">
                                        <div className="item-chart-inner"><img src="/assets/imgs/page/homepage8/chart1.png" alt="iori" /></div>
                                    </div>
                                </div>
                                <div className="box-charts">
                                    <div className="box-chart-1">
                                        <div className="item-chart-inner"><img src="/assets/imgs/page/homepage8/chart2.png" alt="iori" /></div>
                                    </div>
                                    <div className="box-chart-2">
                                        <div className="item-chart-inner"><img src="/assets/imgs/page/homepage8/chart3.png" alt="iori" /></div>
                                    </div>
                                </div>
                                <div className="box-charts">
                                    <div className="box-reviews">
                                        <div className="item-chart-inner">
                                            <div className="row">
                                                <div className="col-lg-6 mb-20">
                                                    <div className="card-comment">
                                                        <div className="card-image"> <img src="/assets/imgs/page/homepage8/author1.png" alt="iori" /></div>
                                                        <div className="card-info">
                                                            <div className="card-title"><span className="font-md-bold color-brand-1 title-comment">Bessie Cooper</span>
                                                                <div className="rating"> <img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                                            </div>
                                                            <p className="font-xs color-grey-500">Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb-20">
                                                    <div className="card-comment">
                                                        <div className="card-image"> <img src="/assets/imgs/page/homepage8/author2.png" alt="iori" /></div>
                                                        <div className="card-info">
                                                            <div className="card-title"><span className="font-md-bold color-brand-1 title-comment">Albert Flores</span>
                                                                <div className="rating"> <img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                                            </div>
                                                            <p className="font-xs color-grey-500">Vivamus hendrerit molestie mi, a volutpat ipsum vol</p>
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
                    <div className="border-bottom mt-90" />
                </section>


                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-center mt-50">
                            <div className="col-lg-4 col-md-12 col-sm-12 mb-30"> <span className="title-line line-48">How it work</span>
                                <h2 className="color-brand-1 mt-10 mb-20">Grow your online business now</h2>
                                <p className="color-grey-500 font-sm">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                <div className="mt-45"><Link className="btn btn-brand-1 hover-up" href="#">Download App</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                    Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer-style-2 card-left bg-white">
                                    <div className="card-offer hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                                            <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                            <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-offer-style-2 card-left bg-grey-60">
                                    <div className="card-offer hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-15">Social Media</h4>
                                            <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                            <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Certification</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Conference</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Research</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Dispersal</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Enterprise</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Team Building</h6></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50">
                            <div className="col-xl-5 col-lg-12 mb-40">
                                <h2 className="color-brand-1 mt-10 mb-15">Business can also be simple</h2>
                                <p className="font-md color-grey-500">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
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
                                <div className="mt-30 text-start"><Link className="btn btn-brand-1 hover-up" href="#">Download App</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-xl-7 col-lg-12">
                                <div className="box-video-business">
                                    <div className="item-video">
                                        <a className="btn btn-play-center popup-youtube" onClick={() => setOpen(true)} /><img className="bd-rd4" src="assets/imgs/page/homepage3/img1.png" alt="iori" /></div>
                                    <div className="box-image-right"><img className="bd-rd4 mb-20" src="assets/imgs/page/homepage3/img2.png" alt="iori" /><img className="bd-rd4" src="assets/imgs/page/homepage3/img3.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog </h2>
                                <p className="font-lg color-gray-500">Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.<br className="d-none d-lg-block" />Aenean vulputate sodales urna ut vestibulum</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">View All
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage2/news1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
                                        <h6 className="color-brand-1">Easy Ways to Make Money While You Sleep</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Technology</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage2/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
                                        <h6 className="color-brand-1">Tiktok video size guide: Everything you need to know</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Marketting</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
                                        <h6 className="color-brand-1">How to convert video to MP4 for free online</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Media</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage2/news3.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
                                        <h6 className="color-brand-1">5 fastest ways to increase search engine rankings</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">SEO</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
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

export default businessIntelligencePage;