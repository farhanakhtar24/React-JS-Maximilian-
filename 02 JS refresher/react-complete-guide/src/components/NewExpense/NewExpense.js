import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = function (props) {
    const saveExpenseData = function (enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ saveExpenseData } />
        </div>
    );
}

export default NewExpense;