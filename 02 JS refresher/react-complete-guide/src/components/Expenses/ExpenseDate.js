import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = function (props) {
    const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
    const expenseDate = props.date.toLocaleString('en-US', { day: '2-digit' });
    const expenseYear = props.date.toLocaleString('en-US', { year: 'numeric' });
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;

    return (
        <div className="expense-date">
            <div className="expense-date__month">{ expenseMonth }</div>
            <div className="expense-date__day">{ expenseDate }</div>
            <div className="expense-date__year">{ expenseYear }</div>
        </div>
    )
};

export default ExpenseDate;