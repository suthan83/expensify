import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {

    const chartDataPoints = [
        { label: 'JAN', value: 0 },
        { label: 'FEB', value: 0 },
        { label: 'MAR', value: 0 },
        { label: 'APR', value: 0 },
        { label: 'MAY', value: 0 },
        { label: 'JUN', value: 0 },
        { label: 'JUL', value: 0 },
        { label: 'AUG', value: 0 },
        { label: 'SEP', value: 0 },
        { label: 'OCT', value: 0 },
        { label: 'NOV', value: 0 },
        { label: 'DEC', value: 0 }   
    ]

    for (const expense of props.filteredExpenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return(
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpenseChart;