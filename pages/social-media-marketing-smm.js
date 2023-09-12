import Link from "next/link";
import Head from 'next/head';
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Offer from '../components/slider/Offer';
import Knowledgebase from '../components/slider/Knowledgebase';
import Accordion from '../components/elements/Accordion';

const smmPage = () => {
    const [isOpen, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>Social Media Marketing - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-6">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="box-banner-6">
                                    <div className="img-testimonials-1 shape-1">
                                        <img src="assets/imgs/page/homepage6/testimonial.png" alt="iori" />
                                    </div>
                                    <div className="img-testimonials-2 shape-2">
                                        <img src="assets/imgs/page/homepage6/testimonial2.png" alt="iori" />
                                    </div>
                                    <img className="img-main" src="assets\imgs\page\homepage6\banner.png" alt="iori" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="box-banner-right-home6">
                                    <span className="title-line line-48">Buyer Personas. High Search Rankings. Plan Content</span>
                                    <h1 className="color-brand-1 mb-20 mt-5">Social Media <br/>Marketing</h1>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p className="font-md color-grey-500 mb-30">Insead Technologies focuses on providing measurable results through customized social media marketing solutions. We take great pride in creating tailored programs, aligned with your goals. Let’s work together to identify your audience, craft your story, and share it with the world.</p>
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
                                <h2 className="color-brand-1 mb-20">SERVICES INCLUDE</h2>
                            </div>
                        </div>
                        <div className="row mt-50">

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Buyer Personas</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">For any marketing strategy — digital or not — you need to know who you're marketing to. The excellent social media marketing strategy infrastructure is built upon precise buyer personas, , it help you Discover the loopholes in social media strategy ,our team will do social listening and research, then define quick wins to get you on the right path build buyer persona.</p>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Evaluate Existing Social Media Assets</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">We will review your all social media assets such as Owned media (Refers to the digital assets your brand or company owns), Earned media ( Related to the exposure you earned through word-of-mouth marketing )and Paid media (any medium through which you pay in exchange for increased visibility) .Then determine what to incorporate in strategy, it's helpful to consider the big picture . </p>
                                        </div>
                                    </div>
                                </div>   
                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Specific Audience Targeting </Link></h4>
                                            <p className="font-md color-grey-500 mb-5">It doesn’t matter how informative and engaging is content, it will not be able propagate conversions if content doesn’t reach the right audience . Marketing through social media allows you to identify and categorize your ideal customers by age, location and online activities, among other metrics. Social media marketing experts determine and analyze of your niche market to understand your target customers’ online behavior and create relevant content and ads to address customer pain point . </p>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">A/B Testing</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">A/B testing is also known as split tests, allow you to compare 2 versions of social media campaign to learn which is more effective. Simply put, do your users like version A or version B? Minor changes, Major improvements When the test is done, you find that changing the latter 3 elements increases conversions by 6% each. you have a shot at bringing in 18% more revenue than you did before. Low risks, high rewards A/B testing is not only cost effective, it's time efficient. You test 2 or 3 elements and get your answer.
Making the most of traffic If you use A/B testing to make your website as effective as it can be, you can get more conversions per visitor. The higher your conversion percentage is, the less time and money you'll need to spend on marketing. That's because, in theory, everyone who visits your website is more likely to act. </p>
                                        </div>
                                    </div>
                                </div>
                                   
                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">High Search Rankings and Exposure</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">Social media marketing is continually progressing and adapting, becoming a powerful online marketing resource for companies and brands. The more people share your content across social media channels, the more traffic they send to your website, and therefore, the better your search rankings. that allow you to interact with a broader online community. </p>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-lg-6">
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Increase Profitability</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">Profits is only thing you earn in the end of day to run your business . Social media marketing give a huge leverage for small businesses and as well as for large enterprises . it help you to reach your ideal clients in most cost-effective way. Multiples social media platforms entitle you to potray your products and services at a low priced in unlimited number of locations. Our social media marketing company performs in-depth business reviews, audience analysis and competitor benchmarking to determine the most profitable techniques for your business.</p>
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
                                            <img className="img-project bd-rd16" src="assets\imgs\page\smm\smm-01.jpg" alt="iori" />
                                            <div className="image-6 shape-3">

                                                <img src="assets\imgs\page\smm\smm-3.png" alt="iori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">

                                    <span className="btn btn-tag">Benefits of Social Media marketing.</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">Social Media marketing.</h3>
                                    <p className="font-md color-grey-400"> Social media marketing is all about meeting your target audience and customers where they are and as they socially interact with each other and your brand.
While social media marketing as a whole is incredibly valuable and beneficial to your business growth, your strategy will differ based on which social network your audience spends their time on.</p>
                                  
                                </div>
                            </div>
                            <div className="row mb-0 mt-40 project-revert align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6 mt-30">
                                    <span className="btn btn-tag">Increase business opportunities.</span>
                                    <h2 className="color-brand-1 mt-10 mb-15">Why Is Social Media Marketing Important?</h2>
                                    <div className="mt-40">
                                    <p className="font-md color-grey-400">  The key to successful social media marketing is keeping yourself updated with the never-ending trends, updates, and business opportunities.</p>
                                    <p className="font-lg color-grey-400">  Full funnel social media marketing that leaves your customer wanting more</p>
                                </div>

                                    <div className="mt-50 text-start">
                                        <Link className="btn btn-brand-1 hover-up" href="#">
                                            Contact us
                                        </Link>
                                       
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6 mt-30">
                                    <div className="box-images-cover text-end">
                                        <div className="box-images-inner">
                                            <img className="img-project bd-rd16" src="assets\imgs\page\smm\social-media-marketing-2.avif" alt="iori" />
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

                <section className="section mt-100">
                    <div className="container" >
                        
                    <div className="box-business-rd" >
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Our Techniques</h2>
                                </div>
                        </div>
                        <div className="row mt-65">
                          
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Advertising Management</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Community Management</h6></Link>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Effective Content Creation </h6></Link>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Measurement & Reporting </h6></Link>
                                        </div>
                                </div>
                            </div>
                            
                        </div>

                     </div>
                  </div>
                </section>

                <section className="section pt-0 pb-50 bg-core-value bg-7 mb-40 mt-100">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value pl-0">
                                    <h1 className="color-brand-1 mb-15">10 Most Crucial KPIs</h1>
                                 </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Engagement</h5>
                                    <p className="font-md color-grey-500"> This includes clicks, comments, likes, and replies on your social media posts. There are also platform-specific types of engagement such as “Saved” posts on Instagram and “Pinned” posts on Pinterest.</p>
                    
                                        <div className="box-border-dashed">
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Reach.</h5>
                                    <p className="font-md color-grey-500"> Post reach is the number of unique users who saw your post.</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Significantly </h5>
                                    <p className="font-md color-grey-500"> Post reach is the number of unique users who saw your post.</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Followers </h5>
                                    <p className="font-md color-grey-500"> This is the number of people you have on your profile who have clicked your “Follow” button and see your content in their feeds regularly.</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Profile visits </h5>
                                    <p className="font-md color-grey-500"> The number of people who have opened your social media page is your number of profile visits.</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                   
                                    
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Impressions</h5>
                                    <p className="font-md color-grey-500"> This is the number of times a post from your profile or page is seen, whether or not your audience members click on it. This is often what happens when someone is scrolling through their newsfeed, but not clicking on anything.</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                
                                   
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Mentions </h5>
                                    <p className="font-md color-grey-500"> This is the number of times your profile has been mentioned by audience members in their posts..</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Tags </h5>
                                    <p className="font-md color-grey-500"> This is when your audience adds the name of your company’s profile or your hashtag to another post.</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Shares </h5>
                                    <p className="font-md color-grey-500">These are the posts your followers and audience take from your profile and share with their network</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Reposts </h5>
                                    <p className="font-md color-grey-500"> This is when a member of your audience posts a piece of your content on their profile</p>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                </ul>
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

export default smmPage;
