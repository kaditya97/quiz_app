import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from 'react-redux';
import Home from "./pages/Home";
import QuestionsList from "./pages/QuestionsList";
import SingleQuestion from "./pages/SingleQuestion";
import MultipleQuestions from "./pages/MultipleQuestions";
import Guess from './pages/Guess';
import Resources from "./pages/Resources";
import ResourceList from "./pages/ResourceList";
import PdfView from "./pages/PdfView";
import Games from './pages/Games';
import Handsfree from './pages/Handsfree';
import Adbs from './pages/Adbs';
import Tools from './pages/Tools'
import Settings from './pages/Settings';
import About from "./pages/About";
import Help from "./pages/Help";


function App() {
    return (
        <Provider store={store}>
          <HashRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="questions" element={<QuestionsList />} />
                    <Route path="multiplequestions" element={<MultipleQuestions />} />
                    <Route path="singlequestion" element={<SingleQuestion />} />
                    <Route path="handsfree" element={<Handsfree />} />
                    <Route path="guess" element={<Guess />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="resourcelist" element={<ResourceList />} />
                    <Route path="pdfview" element={<PdfView />} />
                    <Route path="game" element={<Games />} />
                    <Route path="adbs" element={<Adbs />} />
                    <Route path="tools" element={<Tools />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="about" exact element={<About />} />
                    <Route path="help" exact element={<Help />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
          </HashRouter>
        </Provider>
    );
}

export default App;
