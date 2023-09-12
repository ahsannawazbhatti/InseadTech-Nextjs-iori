import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const testingQualityPage = () => {
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
                <title>TESTING &amp; QUALITY ASSURANCE - Insead Technology</title>
            </Head>

            <Layout>
                <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="color-brand-1 mb-20">TESTING &amp; QUALITY ASSURANCE</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-grey-500">Testing Quality Assurance in IT applications is the backbone of most business processes today. Poorly tested and integrated software has a severe effect on a business’s customers, sales, partnerships, employees and financial bottom line, software testing becomes an increasingly important step in the deployment process to ensure that your solutions, particularly self-service, are delivering the superlative experience your customers expect. Insead Tech has a Global Testing Center of Excellence, global testing labs, and testing professionals with an in-depth understanding of consumer-facing applications. Testing & Quality Assurance, testing strategy STLC Best Testing & QA. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block"><img src="assets\imgs\page\sqa\tsq.png" alt="QUALITY ASSURANCE" /></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section mt-20">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">How We Assure Quality?</h2>
                                <p className="font-lg color-grey-500 mb-5">Insead Tech believe in effective Quality Assurance. </p>
                            </div>
                        </div>
                    
                        <div className="row mt-50 align-items-center card-no-border">
                           
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">BLACK BOX TESTING</Link></h4>
                                        <p className="font-md color-grey-500 mb-5"> We realize that every customer has different quality measures and that Black Box Testing is critical to a successful testing effort.</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">WHITE BOX TESTING</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">We provide the best white box testing services at the most economical price and our testers are educated on the most popular testing tools.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">UNIT TESTING</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">We make sure each and every unit component is tested thoroughly for its performance and quality throughout the entire development of the project.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">PERFORMANCE TESTING</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">We maintain a Testing Center of Excellence for performance testing services with highly trained personnel and specialized infrastructure.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">FUNCTIONAL TESTING</Link></h4>
                                       <p className="font-md color-grey-500 mb-5"> Software testing process used within software development in which software is tested to ensure that it conforms with all requirements.</p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage2/we-do5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">INTEGRATION TESTING</Link></h4>
                                       <p className="font-md color-grey-500 mb-5">In this method program unit functions are combined and tested in multiple ways to check its proper functionality according to requirements.</p>
                                        
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

                <section className="section mt-100">
                    <div className="container" >
                        
                    <div className="box-business-rd" >
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Our Process </h2>
                                <p className="font-lg color-gray-500"> Insead Tech believe that an effective Quality Assurance and Testing  
                                  <br className="d-none d-lg-block" /> strategy is vital to attaining high standards.</p>
                            </div>
                        </div>
                        <div className="row mt-65">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                         <h6 className="color-brand-1 mb-10">Step 1</h6></Link>
                                        <p className="font-xs color-grey-500">REQUIREMENTS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Step 2</h6></Link>
                                        <p className="font-xs color-grey-500">DEVELOP TESTING PLAN </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Step 3</h6></Link>
                                        <p className="font-xs color-grey-500">DEVELOP TESTING CASES </p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Step 4</h6></Link>
                                        <p className="font-xs color-grey-500">TEST CASES EXECUTION </p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Step 5</h6></Link>
                                        <p className="font-xs color-grey-500">RESULT EVALUATION </p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Step 6</h6></Link>
                                        <p className="font-xs color-grey-500">REPORT </p>
                                        </div>
                                </div>
                            </div>
                        </div>

                     </div>
                  </div>
                </section>

                <section className="section mt-80">
                    <div className="container">
                        <div className="box-create-account bg-4">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><span className="title-line line-48">Assure the quality </span>
                                    <h2 className="color-brand-1 mb-20 mt-10">WHY WE NEED TESTING ?</h2>
                                    <p className="font-md color-grey-500 mb-50">Insead Tech believe that an effective Quality Assurance and Testing strategy is vital to attaining high standards. We apply this strategy to all software development that we do, but we can also provide Software testing services to our clients. Testing Services provide a full range of offers to improve your self-service application testing including valuation, strategy and planning, test execution, specialized testing and tool automation. With in-depth self-service and industry expertise in addition to strong testing knowledge, Insead Tech has highly qualified testing resources, the right processes, effective tools/techniques and a focus on continuous improvement that will improve time-to-market, increase consistency of solutions and differentiate yours from your competitors. Testing & Quality Assurance, testing strategy STLC, Best Testing & QA.</p>
                                  
                                </div>
                                <div className="col-lg-6 position-relative mb-30 box-right">
                                    <div className="box-image-account"><img className="d-block" src="assets/imgs/page/homepage12/account.png" alt="iori" /></div>
                                    <div className="cardNumber bg-2">
                                        <div className="card-head">97%</div>
                                        <div className="card-description">System Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section pt-0 pb-50 bg-core-value bg-7 mb-40 mt-100">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-5 mb-70">
                                <div className="box-core-value pl-0">
                                    <h1 className="color-brand-1 mb-15">Test process framework</h1>
                                    <p className="font-md color-grey-500">Our test process framework, which is a result of diverse experiential knowledge, provides lead metrics and critical indicators that help in early course correction and proactive decision making thereby resulting in</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Reducing the defects that impact business use of the application.</h5>
                                        <div className="box-border-dashed">

                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Provide a stable application in production.</h5>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Significantly improve the Quality.</h5>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">It helps in identifying and fixing Bugs.</h5>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Reliability of the Software or Website can be measured with the help of this.</h5>
                                        <div className="box-border-dashed"></div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Remove the data duplication and redundancy.</h5>
                                        <div className="box-border-dashed"></div>
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
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a SQA expert?</h2>
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

export default testingQualityPage;