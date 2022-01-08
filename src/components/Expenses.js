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
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
            </Card>
        </div>
    );
}

export default Expenses;