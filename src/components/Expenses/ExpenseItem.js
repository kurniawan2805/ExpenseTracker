import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); // always return array

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title); // display before update
    };
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Click Me</button>
            </Card >
        </li>
    );
}

export default ExpenseItem;