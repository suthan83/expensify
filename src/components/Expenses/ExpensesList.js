import React from "react";
import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Data Available for this Year</h2>
    }

    return (
        <ul className="expenses-list">
            { props.filteredExpenses.map( 
                expense => {
                    return (
                        <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}/>
                        )
                    }
            )}
        </ul>
    );
} 

export default ExpensesList;