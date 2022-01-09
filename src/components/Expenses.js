import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
    const [filterSelection, setFilterSelection] = useState('2021');

    const filteredExpenses = props.expenses.filter(expense => {
        const year = expense.date.getFullYear().toString();
        return year === filterSelection;
    })

    const filterOptionHandler = (option) => {
        setFilterSelection(option);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter filteredYear={filterSelection} onFilterSelection={filterOptionHandler}/>
                {filteredExpenses.map( 
                    expense => {
                        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                    }
                )}
            </Card>
        </div>
    );
}

export default Expenses;