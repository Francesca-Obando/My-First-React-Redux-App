
//Se crean las constantes de acciones de tipo x accion
export const BUY_PRODUCTS = 'BUY_PRODUCTS';
export const CANCEL_PRODUCTS = 'CANCEL_PRODUCTS';
export const ADD_TEN_PRODUCTS = 'ADD_TEN_PRODUCTS'

export const addTenProducts = ()=>{
   return { 
      type: ADD_TEN_PRODUCTS
   }
}

//Acción para comprar (suma un producto al carrito), que es una función que tiene el parámetro 
//de cantidad de compras 
export const buy_products_action = (cant) => {
     return{
        type: BUY_PRODUCTS,
        payload: cant
     }
}

//Acción para comprar (cancela los productos del carrito), que es una función que tiene el parámetro 
//de cantidad de compras
export const cancel_products_action = () => {
    return{
       type: CANCEL_PRODUCTS,
    }
}


