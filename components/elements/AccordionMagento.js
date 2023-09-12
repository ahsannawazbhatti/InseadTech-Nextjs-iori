import React, { useState } from 'react';

const AccordionMagento = () => {
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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What makes Magento unique?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Magento is a distinctive e-commerce development process with several features that make it stand out from other platforms. Magento is a well-known eCommerce platform with several advantages for businesses, including a user-friendly interface, easy integration with third-party applications, responsive design, multiple deployment choices, and an emphasis on giving customers a pleasurable and satisfying purchasing experience. These elements make it a top option for companies wishing to create a strong and unique e-commerce store.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Is Magento free or paid?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Magento is a free and paid e-commerce platform with two versions: Magento Open Source and Magento Commerce. Open Source requires additional investments to get the full range of features, while Commerce provides more advanced features and support.</div>
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
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Does Magento require coding?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Magento can be used without coding knowledge to set up a basic store, more advanced features and customizations will require coding expertise. It is recommended to have some basic knowledge of common programming languages and commands or to work with a developer or agency that specializes in Magento web development to fully utilize the platform's capabilities.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Which is better WordPress or Magento?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body"> While Magento is better suited for larger enterprises with more substantial needs, WordPress is a wonderful solution for small to medium-sized e-commerce stores that don't need complex functionality. WordPress has an inherent SEO edge over Magento because of SEO plugins like Yoast and the ease with which you can incorporate keyword-rich content like blog entries on your websites.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How many products can Magento handle?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Magento is built to accommodate high-volume stores and can handle a variety of products. To optimize the store's performance for high volume, it is imperative to collaborate with a magento web development agency. The precise quantity of products that Magento can manage will depend on several variables. According to estimates, Magento 2 can easily manage more than 1 million products.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Which technology is used by Magento?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">The open-source scripting language PHP, also known as Hypertext Preprocessor (Hypertext Preprocessor), powers Magento. Additionally, Magento uses Zend Framework, an open-source, object-oriented framework for PHP web applications. The Zend Framework offers a collection of tools that facilitate the creation of reliable and secure online applications.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AccordionMagento;