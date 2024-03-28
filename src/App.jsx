import Services from "./components/services/Services.jsx";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Integration from "./components/Integration.jsx";
import Subscription from "./components/Subscription.jsx";
import Faqs from "./components/Faqs.jsx";

function App() {
    return (
        <>
            <div>
                <Header/>
                <Categories />
                <Services/>
                <Integration />
                {/*<Subscription />*/}
                {/*<Faqs />*/}
            </div>
        </>
    )
}

export default App
