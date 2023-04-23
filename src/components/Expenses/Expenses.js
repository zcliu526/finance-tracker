import React from 'react'
import Item from '../Item/Item'
import './Expenses.css'

function Expenses(props) {

    return (
        <>
            <div className='expenses'>
                <Item
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <Item
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <Item
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
            </div>
        </>
    )
}

export default Expenses