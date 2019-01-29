import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
//import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const burger = (props) => {
    let transformedIngredients = [];
    let ingredientsArray = Object.entries(props.ingredients);  
    for(let [k,val] of ingredientsArray){
        for(let i =0;i<val;i++){
            transformedIngredients.push(<BurgerIngredient key={k+i} type={k} />)        
        }
    }
    //console.log(transformedIngredients);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};

export default burger;