import React from "react"
import './App.css';
import { BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar'
import Router from "./Router"
import { Provider } from "react-redux"
import store from "./redux/store"



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
