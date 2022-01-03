import react, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [year, setYear] = useState('');
    // let setYear = '';

    // const filteredExpenses = [];
    const handleFilterSelect = (value) => {
        // console.log(value);
        // filteredExpenses = 
        setYear(value);


        // filteredExpenses 
        // console.log(value, props.expenses[1].date.getFullYear(), filteredExpenses);
    }
    // console.log(handleFilterSelect())

    const filteredExpenses = (year === '') ? props.expenses : props.expenses.filter(expense => expense.date.getFullYear().toString() === year);
    const expense = filteredExpenses.sort((a, b) => a.date > b.date ? 1 : -1).map(
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
    );
    console.log(year, filteredExpenses);
    return (
        <div>
            <ExpensesFilter onFilterSelect={handleFilterSelect} />
            <Card className="expenses">
                {expense}
            </Card>
        </div>
    )

}

export default Expenses;    