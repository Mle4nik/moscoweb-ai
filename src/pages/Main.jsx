import React from 'react';
import Header from "../components/Header.jsx";
import Categories from "../components/Categories.jsx";
import Services from "../components/services/Services.jsx";
import Integration from "../components/Integration.jsx";
import Subscription from "../components/Subscription.jsx";
import Faqs from "../components/Faqs/Faqs.jsx";
import Footer from "../components/Footer.jsx";

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