import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Parking from "./pages/Parking";
import Vehicle from "./pages/Vehicle";
import Rates from "./pages/Rates";
import MainPrac from "./components/practice design/MainPrac";

function App() {
    return (
        <BrowserRouter>
            <Layout>
            {/* <MainPrac> */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/parking" element={<Parking />} />
                    <Route path="/rates" element={<Rates />} />
                </Routes>
            </Layout>
            {/* </MainPrac> */}
        </BrowserRouter>
        // <MainPrac />
    );
}

export default App;