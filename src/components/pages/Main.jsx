import React from 'react';
import Header from "../Header.jsx";
import Categories from "../Categories.jsx";
import Services from "../services/Services.jsx";
import Integration from "../Integration.jsx";
import Subscription from "../Subscription.jsx";
import Faqs from "../Faqs/Faqs.jsx";
import Footer from "../Footer.jsx";

const Main = () => {
    return (
        <>
            <Header/>
            <Categories />
            <Services/>
            <Integration />
            <Subscription />
            <Faqs />
            <Footer />
        </>
    );
};

export default Main;