import './ExpenseItem.css';

function ExpenseItem() {
    return(
        <div className="expense-item">
            <div >Date</div>
            <div className="expense-item__description">
                <h2>Gym Membership</h2>
                <div className="expense-item__price">$39.99</div>
            </div>
            
        </div>
    )
}

export default ExpenseItem;