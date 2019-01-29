import React from 'react';
import Aux from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';


class OrderSummary extends React.Component {

    render(){
        const ingredientSummary = Object.entries(this.props.ingredients)
            .map( el => <li key={el}>
                <span style={{textTransform: 'capitalize'}}>{el[0]}</span> : {el[1]}
            </li> );


        return (
            <Aux>
                <h3>Your Oder</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Summary: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    clicked={this.props.purchaseCancelled}
                    btnType="Danger">
                    CANCEL
                </Button>
                <Button
                    clicked={this.props.purchaseContinued}
                    btnType="Success">
                    CONTINUE
                </Button>
            </Aux>
        );
    };
}

export default OrderSummary;