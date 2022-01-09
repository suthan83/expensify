import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
    const [filterSelection, setFilterSelection] = useState('2021');
    const expenses = props.expenses;

    const filterOptionHandler = (option) => {
        setFilterSelection(option);
        console.log(option);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter filteredYear={filterSelection} onFilterSelection={filterOptionHandler}/>
                {expenses.map( 
                    expense => {
                        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                    }
                )}
            </Card>
        </div>
    );
}

export default Expenses;