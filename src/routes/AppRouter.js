import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from '../App'
import UserPanel from '../components/userPanel/UserPanel'
import AdminPanel from '../components/adminPanel/AdminPanel'
import NoPageFound from '../components/noPageFound/NoPageFound'

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/user/" component={UserPanel} />
                    <Route path="/admin/" component={AdminPanel} />
                    <Route component={NoPageFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;