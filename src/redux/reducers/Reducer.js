//
//const BUY_PRODUCTS = require('../actions/Action').BUY_PRODUCTS;
//const CANCEL_PRODUCTS = require('../actions/Action').CANCEL_PRODUCTS;

import { BUY_PRODUCTS, CANCEL_PRODUCTS, ADD_TEN_PRODUCTS } from '../actions/Action';

//Estado inicial del reducer:
const default_supermarket = {
    Carrito: 0
}

//Función del reducer, que recibe primeramente un state que será igual al 
//estado inicial que ya se creó previamente, de segundo recibirá una acción
//La acción ejecutada se envía al reducer que tendrá un switch case para reconocer la acción
const supermarket = (state = default_supermarket, action) => {
    //const { type, payload } = action
    switch(action.type){
        case BUY_PRODUCTS:{
            return {
                //Retorna el estado inicial en la consola de salida
                ...state,
                //Retorna lo que tiene el usuario en la compra de su producto, 
                //más la acción de comprar que ejecuta
                Carrito: state.Carrito + action.payload
            }
        }

        case CANCEL_PRODUCTS:{
            return{

                //Retorna el estado inicial en la consola de salida
                //En este caso como es "Cancelar Productos" entonces retornamos 
                //el estado inicial del carrito que sería 0 productos
                ...state,

                Carrito: 0
            }
        }
        case ADD_TEN_PRODUCTS:{
            return {...state, Carrito: state.Carrito + 10}
        }

        //Retorna el estado por defecto que se encuentra en el store
        default: return state;
    }
}

export default supermarket;