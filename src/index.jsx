import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routedemo from "./Routerdemo.jsx"
import Com from "./routerCom.jsx"
const PrimaryLayout = () =>
    <div className="primary-layout">
        <header>Our React Router 4 App</header>
       {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/User">User</Link>
            </li>
        </ul>*/}
        <Routedemo />
        <main>
            <Com />
           {/* <Route path="/" exact component={HomePage} />
            <Route path="/user" component={UsersPage} />*/}
        </main>
    </div>;
/*
const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;*/

const App = () =>
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>;

render(<App />, document.getElementById("root"));