import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from '../Helpers/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

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
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;