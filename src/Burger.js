import React from 'react';

 const burger = (props) => {
    return (
    <div>The Brand Name is {props.brand} and Rate is {props.price} {props.children}</div>
    )
}
export default burger;