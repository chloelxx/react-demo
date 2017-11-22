import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// 等等。
const com = React.createClass({
    render() {
        return (
            <div>
                <Route path="/" component={HomePage} /> {/*加上了exact就只会匹配路由的一个，如果没有exact就点击的路由的所有组件都会渲染*/}
                <Route path="/user" component={UsersPage} />
                <Route path="/user" component={UsersPage1} />
                <Route path="/Info" component={Info} />
                <Route path="/Manger" component={Manager} />
                <Route path="/Date" component={Date11} />
            </div>
        )
    }
})
const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;
const UsersPage1 = () => <h1>User Page1</h1>;
const Info = () => <h1>liuxingx</h1>;
const Manager = () => <h1>黄晓鹏</h1>;
// const Date11 = () => <h1>{new Date()}</h1>;
const Date11=React.createClass({
    render (){
        return (
            <h3>{new Date().toDateString()}</h3>
        )
    }
})
export default com
