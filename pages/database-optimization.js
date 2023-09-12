import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const databaseOptimizePage = () => {
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
                <title>DataBase Optimization - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="color-brand-1 mb-20">DATABASE OPTIMIZATION</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500">Database optimization depends on an intensive comprehension of your query functionality. Database performance optimization, set execution enhancement, application execution and data set proficiency are perceived from the perspective of query wait times. To improve expensive queries, DBAs typically use a variety of manual methods to fix the details of your query or to rearrange the structure of the index itself.
</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block"><img src="assets\imgs\page\database\database-banner.png" alt="iori" /></div>
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
                                                <span className="title-line line-48">WHY DO YOU NEED DATABASE MANAGED SERVICES ?</span>
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    Focus on what <br className="d-none d-lg-block" />matters most. 
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                We monitor databases, large or small, OLTPs, DWs, and everything in between. 
                                                Our monitoring platform is built on an open source, powerful configuration language, and rest API. 
                                                Scale up to thousands of nodes securely and reliably, monitor the availability of your database
                                                 resources, notify stakeholders of outages, and generate performance data for reporting.
                                                 Scalable and extensible, we can monitor large, complex environments across multiple locations. We have a much more cost effective solution than 
the big monitoring companies in many cases less than 1/10the of the cost. And you get white glove service , not some ticket system, with a 24 hour email response .

                                                </p>
                                                <div className="mt-40">
                                                
                                                    Contact us now to discuss how we can help you achieve your manage Database.
                                                        
                                                </div>
                                                <div className="mt-40 text-start">
                                                    <Link className="btn btn-brand-1 hover-up" href="/help"> Get Free Database Audit Report</Link><Link href="#" className="btn btn-default font-sm-bold hover-up" >Learn More
                                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="assets\imgs\page\database\database-main-3.png" alt="iori" />
                                                <div className="box-number-business shape-3">
                                                    <div className="cardNumber bg-white">
                                                        <h3>10x</h3>
                                                        <p className="font-xs color-brand-1">Incease Database Speed</p>
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
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Why You Should Consider Us? </h2>
                                <p className="font-lg color-gray-500"> Our team proactively tracks your database, ensuring issues are dealt with before they become
                                  <br className="d-none d-lg-block" /> a disaster. Importantly, this enables your business to always run smoothly. Giving you<br className="d-none d-lg-block" />time to focus on what matters most.</p>
                            </div>
                        </div>
                        <div className="row mt-65">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">DATABASE AUDIT</h6></Link>
                                        <p className="font-xs color-grey-500">Evaluate every aspect of your cloud database setup to identify the issues and provide solutions for them. Either its oracle or SQL server, our solution provides effective audit services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="/assets/imgs/page/homepage1/cross.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">QUERY OPTIMIZATION</h6></Link>
                                        <p className="font-xs color-grey-500">The composite data virtualization platform provides a number of query optimization strategies and techniques including SQL push down, and parallel processing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="/assets/imgs/page/homepage2/identity.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">DATA ARCHIVING</h6></Link>
                                        <p className="font-xs color-grey-500">Database archiving is a core component of a successful data governance program, and our solution for DB archiving enables companies to get the financial and operational benefits of pruning inactive data. It is cost effective and improves performance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="/assets/imgs/page/career/persuasion.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">DATA MIGRATION</h6></Link>
                                        <p className="font-xs color-grey-500">Our solution automates and streamlines data migration processes with a combination of software, best-practice methodology, and experienced professional services. It Lowers the DB migration Cost and saves time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-80">
                    <div className="container">
                        <div className="box-create-account bg-1">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><span className="title-line line-48">Take the control</span>
                                    <h2 className="color-brand-1 mb-20 mt-10">OUR PROCESS </h2>
                                    <p className="font-md color-grey-500 mb-50">We focus on function, usability and train you to manage your website as a business asset. We go to great lengths to assure your content is delivered in such a way that visitors can easily and intuitively find the information they seek, resulting in a user friendly experience.</p>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 mb-30">
                                            <div className="box-image-bg-60"><img className="d-block" src="assets/imgs/page/homepage3/personal.svg" alt="iori" /></div>
                                            <h6 className="color-brand-1 mb-15">PARSING</h6>
                                            <p className="font-xs color-grey-500">It involves separating the pieces of a SQL statement into a data structure that other routines can work.</p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="box-image-bg-60"><img className="d-block" src="assets/imgs/page/homepage3/building.svg" alt="iori" /></div>
                                            <h6 className="color-brand-1 mb-15">BINDING</h6>
                                            <p className="font-xs color-grey-500">Binding will run a SQL Query against any of the database connections configured in the Gateway. </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 mb-30">
                                            <div className="box-image-bg-60"><img className="d-block" src="assets/imgs/page/homepage3/personal.svg" alt="iori" /></div>
                                            <h6 className="color-brand-1 mb-15">QUERY OPTIMIZATION</h6>
                                            <p className="font-xs color-grey-500">It involves the whole process of choosing the most effective and efficient way of executing the SQL statement.</p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="box-image-bg-60"><img className="d-block" src="assets/imgs/page/homepage3/building.svg" alt="iori" /></div>
                                            <h6 className="color-brand-1 mb-15">EXECUTION & RESULT</h6>
                                            <p className="font-xs color-grey-500">Finally the query is executed and the result is documented, hence completing the process.  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 position-relative mb-30 box-right">
                                    <div className="box-image-account"><img className="d-block" src="assets/imgs/page/homepage12/account.png" alt="iori" /></div>
                                    <div className="cardNumber bg-2">
                                        <div className="card-head">10X</div>
                                        <div className="card-description">System Performance</div>
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
                                    <h1 className="color-brand-1 mb-15">Benefits of DB Optimization</h1>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Faster processing of query.</h5>
                                        <div className="box-border-dashed">

                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Lesser cost per query.</h5>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Efficient usage of database engine.</h5>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">High performance of the System</h5>
                                        <div className="box-border-dashed">
                                         </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Lesser stress on the database.</h5>
                                        <div className="box-border-dashed">
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Lesser memory is consumed.</h5>
                                        <div className="box-border-dashed">
                                        </div>
                                    </li>
                                </ul>
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a Database expert?</h2>
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

export default databaseOptimizePage;