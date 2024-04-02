import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main.jsx";
import Form from "./pages/Form.jsx";

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
