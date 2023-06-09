import React from 'react'
import './Item.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function Item(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
}

export default Item;