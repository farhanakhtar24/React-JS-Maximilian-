import './ExpenseItem.css';

function ExpenseItem(data) {
    const expenseMonth = data.date.toLocaleString('en-US', { month: 'long' });
    const expenseDate = data.date.toLocaleString('en-US', { day: '2-digit' });
    const expenseYear = data.date.toLocaleString('en-US', { year: 'numeric' });
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;

    const now = new Date();

    return (

        <div className="expense-item" >
            <div>
                <div>{ expenseMonth }</div>
                <div>{ expenseDate }</div>
                <div>{ expenseYear }</div>
            </div>
            <div className="expense-item__description">
                <h2>{ data.title }</h2>
                <div className="expense-item__price">${ data.amount }</div>
            </div>
        </div>
    )
};

export default ExpenseItem;