import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Parking from "./pages/Parking";
import Vehicle from "./pages/Vehicle";
import Rates from "./pages/Rates";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/parking" element={<Parking />} />
                    <Route path="/vehicles" element={<Vehicle />} />
                    <Route path="/rates" element={<Rates />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;