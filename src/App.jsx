import Services from "./components/services/Services.jsx";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Integration from "./components/Integration.jsx";
import Subscription from "./components/Subscription.jsx";
import Faqs from "./components/Faqs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
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
    )
}

export default App
