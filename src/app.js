import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import Home from "./pages/Home";


function App() {
    return (
        <Provider store={store}>
          <Home />
        </Provider>
    );
}

export default App;
