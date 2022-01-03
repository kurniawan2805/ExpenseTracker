import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('');
    const handleFilterSelect = (selectedYear) => {
        setFilteredYear(selectedYear); // update state from change event
    }
    const filteredExpenses = (filteredYear === '') ? props.expenses : props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterSelect={handleFilterSelect} />
                {/* {expensesContent} */}
                <ExpensesList filteredExpenses={filteredExpenses} />
            </Card>
        </div>
    )

}

export default Expenses;    