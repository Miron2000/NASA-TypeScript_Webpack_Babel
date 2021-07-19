import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './Styles.css';
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='page'>
                <Header/>
                <h1>Hello world - {process.env.NODE_ENV} {process.env.name}</h1>
                <Switch>
                    <Route exact path='/' component={MainSection}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;