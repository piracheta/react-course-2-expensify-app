import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                    <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
                    <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;