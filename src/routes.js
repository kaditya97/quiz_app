import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from 'react-redux';
import Home from "./pages/Home";
import Help from './pages/Help';
import About from './pages/About';
import { NotFound } from './pages/NotFound';


function AppRoutes() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/help" exact element={<Help />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default AppRoutes;
