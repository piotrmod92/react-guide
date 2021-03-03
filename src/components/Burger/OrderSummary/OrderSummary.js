import React from 'react';

import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.entries(props.ingredients)
        .map(([igKey, igValue]) => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {igValue}
                </li>)
        });
    return (
    <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to ckeckout?</p>
        <Button btnType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
    );
}

export default orderSummary;