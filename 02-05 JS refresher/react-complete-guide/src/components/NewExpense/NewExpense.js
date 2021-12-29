import React, { useState } from "react";
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

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHander = function () {
        setIsEditing(true);
    }

    const stopEditing = function () {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            { isEditing === false && (<button button onClick={ startEditingHander }>Add New Expense</button>) }
            { isEditing === true && (< ExpenseForm onSaveExpenseData={ saveExpenseData } stopeditfunc={ stopEditing } />) }
        </div >
    );
}

export default NewExpense;