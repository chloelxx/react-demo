import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import app from "./App.jsx"
// 等等。
const com = React.createClass({
    render() {
        return (
            <div>
                <Route path="/" component={HomePage} /> {/*加上了exact就只会匹配路由的一个，如果没有exact就点击的路由的所有组件都会渲染*/}
                <Route path="/user" component={UsersPage} />
                <Route path="/users" component={app} />
                <Route path="/Info" component={Info} />
                <Route path="/Manger" component={Manager} />
                <Route path="/Date" component={Date11} />
                <Route path="/username/:username" component={Username}/>
            </div>
        )
    }
})

const Username = ({ match }) => {
    return <h1>Hello {match.params.username}!</h1>
}
const HomePage = () => <h1>Home Page</h1>;
var UsersPage = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
});
const UsersPage1 = () => <h1>User Page1</h1>;
const Info = () => <h1>liuxingx</h1>;
const Manager = () => <h1>黄晓鹏</h1>;
// const Date11 = () => <h1>{new Date()}</h1>;
const Date11=React.createClass({
    render (){
        return (
            <h3>
                {new Date().toDateString()}
            </h3>
        )
    }
})
export default com
