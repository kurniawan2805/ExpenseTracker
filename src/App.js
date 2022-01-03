// import logo from './logo.svg';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const expenses = [
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
      date: new Date(2022, 2, 27)
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

  const addExpenseHandler = (expense) => {
    // console.log('from App');
    // console.log(expense);
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem> */}
      {/* {myExp} */}
    </div>



  );
}

export default App;
