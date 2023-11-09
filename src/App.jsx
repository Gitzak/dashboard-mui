import { useState } from "react";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboard2 from "./components/dashboard/Dashboard2";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard2" element={<Dashboard2 />} />
            </Routes>
        </Router>
    );
}

export default App;
