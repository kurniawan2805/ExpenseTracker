import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
    const expense = props.expenses.sort((a, b) => a.date > b.date ? 1 : -1).map(
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
    )
    return (
        <Card className="expenses">
            {expense}
        </Card>
    )

}

export default Expenses;    