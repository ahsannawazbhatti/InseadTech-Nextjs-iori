import React, { useState } from 'react';

const AccordionShopify = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            

            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What do Shopify agencies do?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Shopify development agencies are businesses or organizations that focus on offering services associated with the Shopify platform. Using the platform, they assist businesses with setting up, personalizing, and managing their online stores. These services cover app integration, marketing, SEO, maintenance, and support in addition to shop setup and configuration. Shopify agencies offer a wide range of services that enhance the usability, aesthetics, and promotion of an online store, enabling businesses to maximize their potential for online sales.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What exactly does Shopify do?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">A cloud-based e-commerce platform, Shopify, enables companies to build and operate online storefronts. With website hosting, inventory management, payment processing, shipping integration, and marketing tools, Shopify offers all the features and tools required to assist entrepreneurs in setting up and managing their online stores. Shopify merchants can create a cutting-edge online store and sell on social media platforms, seller marketplaces, other blogs, and websites, as well as via email, text, and chat.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can you make money on Shopify?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Absolutely, you can earn money using Shopify. Businesses may sell their products and services online, attract a larger audience, and boost their profitability by utilizing Shopify. So here's how Shopify can help you profit from your POD business: Easy integration with more than 24 Print on Demand apps and the best Print on Demand businesses, such as Printful, Printify, and Custom Cat.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What is Shopify development?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">For online stores that are hosted on the Shopify platform, bespoke solutions, features, and capabilities are created through a process known as Shopify development. Custom solutions that are tailored to each client's specific requirements are developed by Shopify developers using their proficiency in web development, programming languages, and Shopify APIs. You receive a recurring commission by creating a development store and handing it over to a client.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What is a Shopify development agency?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Businesses may enhance their online sales and give clients a better shopping experience by utilizing the particular skills that Shopify development agencies offer. These organizations can collaborate with companies of various sizes, from small start-ups to huge corporations, to develop unique solutions that achieve their objectives. We support businesses in growing in a world where market divisions are eroding, technology is developing, and sales are conducted globally.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}> What are the benefits of hiring a Shopify development agency?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Using a Shopify development agency may provide businesses with several advantages, such as expertise and experience, customized solutions, time and cost savings, ongoing support and maintenance, and scalability, which can help businesses, increase their online sales and give customers a better shopping experience. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What are the advantages of the Shopify Development Company?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">By working with a Shopify development company, organizations can benefit from specialized knowledge, specialized solutions, cost and time savings, ongoing support and maintenance, scalability, and access to Shopify experts. Inseadtech is a developing Shopify development company that provides competent and successful Shopify development services on a global scale. We provide incredibly unique custom Shopify development services for companies of all sizes, with a focus on Shopify Growth. We adhere to the best coding techniques to express robust and scalable guided Shopify Development Services.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AccordionShopify;