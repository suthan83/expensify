import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [clicked, setClicked]= useState(false);

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setClicked(false);
    }

    const cancelExpenseHandler = (event) => {
        setClicked(false);
    }

    const clickHandler = (event) => {
        setClicked(true);
    }

    return (
        <div className="new-expense">
            {!clicked && <button onClick={clickHandler}>New Expense</button>}
            {clicked && <ExpenseForm onExpenseSave={saveExpenseDataHandler} onCancel={cancelExpenseHandler}/>}
        </div>
    )
}

export default NewExpense;