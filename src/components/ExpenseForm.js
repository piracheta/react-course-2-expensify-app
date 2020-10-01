import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
//const now = moment();

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange(e) {
        const typedDescription = e.target.value;
        this.setState(() => {
            return {
                description: typedDescription
            }
        });
    }
    onAmountChange(e) {
        const typedAmount = e.target.value;
        if (!typedAmount || typedAmount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: typedAmount
                }
            });
        }
    }
    onDateChange(createdAt){
        if(createdAt){
            this.setState(() => {
                return {
                    createdAt: createdAt
                }
            });
        }
    }
    onFocusChange({focused}){
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        });
    }
    onNoteChange(e) {
        const typedNote = e.target.value;
        this.setState(() => {
            return {
                note: typedNote
            }
        });
    }
    onSubmit(e){
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            // Set error state equal to 'Please provide description and amount'
            this.setState(() => {
                return {
                    error: 'Please provide description and amount'
                }
            });
        } else {
            this.setState(() => {
                return {
                    error: ''
                }
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder="Description"
                        type="text"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <input
                        placeholder="Amount"
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>
                        {this.props.typeForm === "edit" ? 'Save changes' : 'Add expense'}
                    </button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;