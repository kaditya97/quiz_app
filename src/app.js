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
import Games from './pages/Games';
import Settings from './pages/Settings';
import About from "./pages/About";
import Help from "./pages/Help";
import Handsfree from './pages/Handsfree';


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
                    <Route path="game" element={<Games />} />
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
