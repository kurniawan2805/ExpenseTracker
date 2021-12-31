// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 247.69,
      date: new Date(2021, 2, 28)
    },
    {
      id: 2,
      title: 'Electricity',
      amount: 27.69,
      date: new Date(2021, 2, 29)
    },

  ]

  const myExp = expenses.map(expense => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>)
  })

  console.log(myExp);
  return (
    <div>
      <h2> Tes Let's get started!</h2>
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
      {myExp}
    </div>



  );
}

export default App;
