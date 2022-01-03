import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    // let isSelected = false;
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData)
        props.onAddExpense(expenseData);
    };

    const isSelectedHandler = () => {
        setIsSelected(true);
    };

    const stopEditingHandler = () => {
        setIsSelected(false);
    }


    return <div className="new-expense">
        {!isSelected && <button type="button" onClick={isSelectedHandler}>Add New Expense</button>}
        {isSelected && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>

}

export default NewExpense;