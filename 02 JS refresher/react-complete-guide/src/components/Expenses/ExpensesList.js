import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = function (props) {
    // let expenseContent = <p>No Content Found !!</p>;
    if (props.list.length === 0) {
        return <h2 className=".expenses-list__fallback">Found No Expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            { props.list.map(function (expense) {
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
        </ul>
    )
}

export default ExpensesList;