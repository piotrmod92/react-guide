import React, {Component} from 'react';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const total = Object.values(ingredients).reduce((sum, currentValue) => {
            return sum + currentValue;
        }, 0);
        this.setState({purchasable: total > 0})
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: updatedCount
        }

        const priceAddition = INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice + priceAddition});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1;
            const updatedIngredients = {
                ...this.state.ingredients,
                [type]: updatedCount
            }

            const priceDeduction = INGREDIENT_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice - priceDeduction});
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({purchasing: false});
        alert('Ordered!');
    }

    render () {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] < 1);
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}/>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}/>
                    </Modal>
            </Aux>
        ); 
    }
}

export default BurgerBuilder;