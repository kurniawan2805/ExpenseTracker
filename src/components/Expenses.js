import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    const expense = props.expenses.map(
        (expense) => {
            return (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            );
        }
    )
    return (
        <div className='expenses'>
            {expense}
        </div>
    )

}

export default Expenses;    