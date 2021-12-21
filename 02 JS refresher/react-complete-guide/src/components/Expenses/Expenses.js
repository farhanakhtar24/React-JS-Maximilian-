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

    const filteredYearExpense = props.expenseData.filter(function (expense) {
        return (expense.date.getFullYear().toString() === pickedYear);
    });

    console.log(pickedYear);
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={ pickedYear }
                    onSaveExpenseFilterYear={ filterChangeHandler }>
                </ExpensesFilter>
                { filteredYearExpense.map(function (expense) {
                    return (
                        <ExpenseItem
                            key={ expense.id }
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