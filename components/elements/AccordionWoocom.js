import React, { useState } from 'react';

const AccordionWoocom = () => {
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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What are the disadvantages of WooCommerce?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Although WooCommerce is a well-liked and effective e-commerce solution, it could have certain disadvantages. WooCommerce is said to take up a lot of space, according to some users. When you use it to configure your hosting plan, you will also run into problems. The worst thing that could occur to an eCommerce website is this.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Is WooCommerce good for large eCommerce?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">WooCommerce is a strong and adaptable e-commerce platform that can be used to create online stores of all shapes and sizes, including large e-commerce websites. But, it's crucial to remember that when the website expands, firms could need to make extra investments in resources to meet their needs. Even the largest firms, especially those that are enterprise-based, occasionally experience problems.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How many products can you sell on WooCommerce?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">The number of products that can be sold on a website created using WooCommerce is not subject to any set restrictions. The only restriction on how many products you can add to your WooCommerce store is the number of resources that are included in your web hosting package. But, it's crucial to keep in mind that when the quantity of products on your website increases, it may affect how quickly the website loads. Determining a hosting plan that can support your website's anticipated traffic and product load is therefore advised.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Is WooCommerce difficult?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Because of its straightforward interface and powerful features, WooCommerce is the most popular e-commerce platform worldwide. As an open-source platform, it is cost-free to use and gives users total control over how their online business is run. Because it provides both flexibility and power for setting up and managing an online business, WooCommerce is the perfect option for both newcomers and seasoned e-commerce professionals.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}> What is the difference between WordPress and WooCommerce?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">WooCommerce and WordPress are two different software applications, but they are linked. Websites of various kinds, including e-commerce websites, can be created and managed using the content management system (CMS) WordPress. On the other side, WooCommerce is a WordPress plugin that enhances e-commerce capabilities for WordPress websites.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What is the benefit of WooCommerce?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Using WooCommerce for your e-commerce website has several advantages, such as a user-friendly interface, flexibility, cost-effectiveness, security, and scalability. Instead, it has access to an almost limitless number of free Plugins through the WordPress Plugin Directory. On Codecanyon and WooCommerce.com, you can purchase the premium versions.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Is WooCommerce a theme or plugin?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">: WordPress is a plugin, not a theme. It is an open-source, free plugin that can be used to add e-commerce capabilities to a WordPress website. When WooCommerce is installed, it offers several features and tools for running an online store, including the capacity to add products, handle orders, control inventory, and more. All the necessary pages and features will be created for you in "a few clicks" so you can launch your online business. It is that easy.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AccordionWoocom;