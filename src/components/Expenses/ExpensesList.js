import React from "react";

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {

    // let expensesContent = <p>No data Found!</p>
    if (props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses!</h2>
    }
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.sort((a, b) => a.date < b.date ? 1 : -1).map(
                (expense) => {
                    return (
                        <ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            key={expense.id} // need to add this to ignore warning
                        ></ExpenseItem>
                    );
                }
            )}
        </ul>


    )
}

export default ExpensesList;