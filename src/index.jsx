import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routedemo from "./Routerdemo.jsx"
import Com from "./routerCom.jsx"
// import app from "./App.jsx"
/*const PrimaryLayout = () =>
    <div className="primary-layout">
       <header>
           Our React Router 4 App
       </header>
       {/!* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/User">User</Link>
            </li>
        </ul>*!/}
        <Routedemo />
        <main>
            <Com />
           {/!* <Route path="/" exact component={HomePage} />
            <Route path="/user" component={UsersPage} />*!/}
        </main>
    </div>;*/
/*
const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;*/
const PrimaryLayout=React.createClass({
    render(){
        return (
            <div className="primary-layout">
                <header>
                    Our React Router 4 App
                </header>
                <Routedemo />
                <main>
                    {this.props.name}
                    <Com  name="chloe"/>
                </main>
            </div>
        )
    }
})
const App =React.createClass({
      render(){
          return (
              <BrowserRouter >
                  <PrimaryLayout name={this.props.name} age={this.props.age} site={this.props.site}/>
              </BrowserRouter>
          )
      }
    })

/*var App = React.createClass({
    render: function() {
        return (
            <div>
                <Name name={this.props.name} age={this.props.age} />
                <LinkURL site={this.props.site} />
            </div>
        );
    }
});

var Name = React.createClass({
    render: function() {
        return (
            <h1>{this.props.name},{this.props.age}</h1>
        );
    }
});

var LinkURL = React.createClass({
    render: function() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
});*/

render(<App name="liuxx" age="26" site="www.baidu.com"/>, document.getElementById("root"));