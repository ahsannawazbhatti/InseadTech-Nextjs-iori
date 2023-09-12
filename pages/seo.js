import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const seoPage = () => {
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
                <title>SEARCH ENGINE OPTIMIZATION - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="color-brand-1 mb-20">SEARCH ENGINE OPTIMIZATION</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500">Search Engine Marketing (SEO) is the process of improving the visibility of your site in Google’s search results as well as other platform , it help you reach your target audience by placing website on top results Insead Technologies SEO specialists will lead you through the complexities of both Technical SEO & Competitor driven targeting and providing your business guaranteed visibility as your customers search for your product or service. We always use a long-term, content-led strategy to achieve the best Search Engine Marketing return on investment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block"><img src="assets/imgs/page/SEO/seo1.png" alt="iori" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        
                    <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30">
                                                <span className="title-line line-48">Why SEO is important?</span>
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    SEO will help you<br className="d-none d-lg-block" />grow your business 
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                An SEO Audit highlights vital point for improvements for your website that will enhance your organic
                                                search performance on Google, Bing and more . Insead Technologies SEO Audits cover wide range of SEO
                                                factors, including technical SEO, Content Marketing, Competitor Targeting and more .
                                                You can affect how Google crawls and indexes your web pages, and an SEO Audit will
                                                identify actionable recommendations for you to take away and implement to help get your pages to the 
                                                top positions on Google.

                                                </p>
                                                <div className="mt-40">
                                                
                                                    Contact us now to discuss how we can help you achieve your SEO goals through a creative and collaborative strategy.
                                                        
                                                </div>
                                                <div className="mt-40 text-start">
                                                    <Link className="btn btn-brand-1 hover-up" href="/help"> Get Free Seo Audit Report</Link><Link href="#" className="btn btn-default font-sm-bold hover-up" >Learn More
                                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="assets\imgs\page\SEO\seo-grow.png" alt="iori" />
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


               
                <section className="section mt-100">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="title-line mb-10">WHY SEO IS BENEFICIAL</div>
                                <h2 className="color-brand-1">The higher your site ranks, the more sales your business to generate.</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">On page SEO </a></h4>
                                        <p className="font-md color-grey-500 mb-5">On page SEO is a really important part of SEO Optimization. This is where you construct your website pages and implement certain techniques to improve your search engine ranks as possible on search engine result pages(SERPs), as well your website will get more traffic’s.On page SEO includes different factors like Keyword Research, URL Optimization, Meta Tags, Header Tags, Keyword Placement in Content, Image Optimization and more</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">Technical SEO</a></h4>
                                        <p className="font-md color-grey-500 mb-5">Search engine is blind, there are an array of factors that help your website rank above the competition for the product or service that it provides. Technical SEO is part of on-page SEO, which focuses on improving elements on your website to get higher rankings. It’s the opposite of off-page SEO, Technical SEO optimisation alters website Making a website faster, easier to crawl, and more understandable for search engines are the pillars of technical optimization.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">Off-Page SEO</a></h4>
                                        <p className="font-md color-grey-500 mb-5">Off-page optimization refers to the technique that can be used to improve the position of a website on a search engine results page(SERPS). It involves establishing trustworthiness and authoritativeness for a site in the eyes of search engines like Google. Many people associate off-page SEO with link building but it is not only that. It is also used in promotion methods like blogging, website design, social bookmarking, Influencer Outreach. Social Media Engagement</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">SEO Content Marketing</a></h4>
                                        <p className="font-md color-grey-500 mb-5">As the saying goes, content is king . Content Marketing go hand in hand - as far as search engine is concerned, creating and optimising high quality content on your website must be your first priority as a webmasters.
In order to engage with your audience you need to provided valuable content such as web content, infographics, blogs, and ensuring it is targeted towards highly searched-for keywords. Keyword analysis is a crucial element and by Knowing what your potential customers are searching you can significantly increase your search engine visibility and traffic.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">Seo Competitor Research</a></h4>
                                        <p className="font-md color-grey-500 mb-5">It's good to have high-quality competition; it helps drive research forward at a faster pace.
Competitor analysis SEO is the process of identifying any related website that ranks higher than you on SERPs for search terms related to your product, service or company. Learning about what’s working for your competition enables you to apply those insights to your own SEO strategy.Your business might have done competitor analysis for everything from product development to marketing strategy. But it’s important to be aware that your main business competitors may be different from your main SEO competitors.</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">Local SEO</a></h4>
                                        <p className="font-md color-grey-500 mb-5">Local SEO Is a Business local Best Friend Optimizing your business for local SEO allows you to promote your products and services to an audience of interested buyers—people who are close to your business and are actively searching for a product or service that you sell With the heavy use of smart devices and location tracking, local SEO is more important than ever before.. Google have stated that at least 20% of all searches relate to a location, it’s really important to pay attention to local SEO. This is especially true when you consider that mobile search is expected to leapfrog desktop in the very near future Currently 40% – 50% of mobile searches relate to a location. </p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><a className="color-brand-1" href="#">Linkbuilding & Digital PR</a></h4>
                                        <p className="font-md color-grey-500 mb-5">Link building which allow your business to gain high authority for your website to perform better in search engines for your target keywords, high authority links which contribute towards Google's PageRank algorithm. As for Digital PR ,it aims to increase brand awareness, brand reputation, and market penetration. The goal here is to gain coverage. While also helping your target audience understand your brand and the kinds of products you offer. Nowadays, one quality link pointing to your site is better than 10 low quality links - and Google is getting smarter and smarter about how to tell the difference.</p>
                                        
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        
                    </div>
                </section>
              
                <section className="section mt-50">
                    <div className="container">
                        <div className="row mt-50">
                            <div className="col-xl-6 col-lg-5">
                                <div className="box-images-project">
                                    <div className="title-line mb-10">Why choose us?</div>
                                    <h2 className="color-brand-1 mb-25">See why we are trusted the world over</h2>
                                    <p className="color-grey-500 mb-15">Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You’re good enough.</p>
                                    <p className="color-grey-500">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
                                    
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="row pt-40">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="cardNumber hasBorder mt-50">
                                            <div className="card-head">465k</div>
                                            <div className="card-description">Social followers</div>
                                        </div>
                                        <div className="cardNumber bg-brand-2">
                                            <div className="card-head">756+</div>
                                            <div className="card-description">Project Done</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="cardNumber bg-2">
                                            <div className="card-head">5000+</div>
                                            <div className="card-description">Happy Clients</div>
                                        </div>
                                        <div className="cardNumber bg-4">
                                            <div className="card-head">100%</div>
                                            <div className="card-description">Client Satisfaction</div>
                                        </div>
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
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Support Center
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
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
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">By clicking the button, you are agreeing with our Term &amp; Conditions</p>
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

export default seoPage;