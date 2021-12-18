import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = function (props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={ props.expenseData[0].title } // we can also pass the data as a static data
                amount={ props.expenseData[0].amount }
                date={ props.expenseData[0].date }
            ></ExpenseItem>
            <ExpenseItem
                title={ props.expenseData[1].title } // we can also pass the data as a static data
                amount={ props.expenseData[1].amount }
                date={ props.expenseData[1].date }
            ></ExpenseItem>
            <ExpenseItem
                title={ props.expenseData[2].title } // we can also pass the data as a static data
                amount={ props.expenseData[2].amount }
                date={ props.expenseData[2].date }
            ></ExpenseItem>
            <ExpenseItem
                title={ props.expenseData[3].title } // we can also pass the data as a static data
                amount={ props.expenseData[3].amount }
                date={ props.expenseData[3].date }
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;