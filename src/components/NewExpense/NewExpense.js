import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSave={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;