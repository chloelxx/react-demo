import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// 等等。
/*const Users = React.createClass({
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/User">User</Link>
                </li>
                <li>
                    <Link to="/User">User</Link>
                </li>
                <li>
                    <Link to="/Info">Info</Link>
                </li>
                <li>
                    <Link to="/Manger">Manger</Link>
                </li>
                <li>
                    <Link to="/Date">Date</Link>
                </li>
                <li>
                    <Link to="/username/liuxx">username</Link>
                </li>
            </ul>
        )
    }
})*/
const Users=({match})=>(
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/User">
                User
            </Link>
            {/*<Link to="/User">User</Link>*/}
        </li>
        <li>
            <Link to="/Users">User</Link>
        </li>
        <li>
            <Link to="/Info">Info</Link>
        </li>
        <li>
            <Link to="/Manger">Manger</Link>
        </li>
        <li>
            <Link to="/Date">Date</Link>
        </li>
        <li>
            <Link to="/username/liuxx">username</Link>
        </li>
    </ul>
)
export default Users
