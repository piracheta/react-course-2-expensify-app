import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h2>ExpenseList</h2>
            {
                props.expenses.map((expense) => (
                    <ExpenseListItem {...expense} key={expense.id}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;