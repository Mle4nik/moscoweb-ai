import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/pages/Main.jsx";
import Form from "./components/pages/Form.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
