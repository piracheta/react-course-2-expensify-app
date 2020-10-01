import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const store = configureStore();
const expenseOne = store.dispatch(addExpense({
    description: "Water bill",
    amount: 150,
    createdAt: 1601578811111
}));
const expenseTwo = store.dispatch(addExpense({
    description: "Gas bill",
    amount: 500,
    createdAt: 1601578837396
}));
const expenseThree = store.dispatch(addExpense({
    description: "Rent",
    amount: 2500,
    createdAt: 1601578
}));
const expenseFour = store.dispatch(addExpense({
    description: "Food",
    amount: 850,
    createdAt: 9500
}));
// const filter = store.dispatch(setTextFilter('water'));
// setTimeout(() => {
//     const filter = store.dispatch(setTextFilter('gas'));
// },3000)
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot);