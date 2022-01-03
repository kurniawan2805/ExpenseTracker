// import logo from './logo.svg';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 247.69,
    date: new Date(2020, 2, 28)
  },
  {
    id: 2,
    title: 'Electricity',
    amount: 27.69,
    date: new Date(2021, 0, 29)
  },
  {
    id: 3,
    title: 'Internet',
    amount: 17.49,
    date: new Date(2021, 2, 27)
  },
  {
    id: 4,
    title: 'Grocery',
    amount: 57.49,
    date: new Date(2019, 2, 2)
  },
  {
    id: 5,
    title: 'Beverage',
    amount: 7.49,
    date: new Date(2019, 5, 2)
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    // console.log('from App');
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses];
    }); //clean way to update using function from previous state
  }

  console.log(expenses);
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>



  );
}

export default App;
