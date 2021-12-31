// import logo from './logo.svg';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

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
    {
      id: 3,
      title: 'Internet',
      amount: 17.49,
      date: new Date(2021, 2, 27)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
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
