import './Styles.css';
import logo from './logo.jpg';
import {ClickCounter} from "./ClickCounter";

export const App = () => {
    return <>
        <h1>Hello world - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={logo} alt="logo" width="300" height="200"/>
        <ClickCounter/>
    </>

}