import React, { useState } from 'react';

import Card from '../UI/Card';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import ExpensesFilter from './ExpenseFilter';


const Expenses = function (props) {
    const [pickedYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    console.log(pickedYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={ pickedYear } onSaveExpenseFilterYear={ filterChangeHandler }></ExpensesFilter>
                { props.expenseData.map(function (expense) {
                    return (<ExpenseItem
                        title={ expense.title }
                        amount={ expense.amount }
                        date={ expense.date }
                    ></ExpenseItem>
                    )
                })
                }
            </Card>
        </div>
    );
}

export default Expenses;