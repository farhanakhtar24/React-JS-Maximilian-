import React, { useState } from 'react';

import Card from '../UI/Card';

import './Expenses.css';

import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';


const Expenses = function (props) {
    const [pickedYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredYearExpenseList = props.expenseData.filter(function (expense) {
        return (expense.date.getFullYear().toString() === pickedYear);
    });


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={ pickedYear }
                    onSaveExpenseFilterYear={ filterChangeHandler }>
                </ExpensesFilter>
                <ExpensesList list={ filteredYearExpenseList }></ExpensesList>
            </Card>
        </li>
    );
}

export default Expenses;