import React from 'react';
import { useDispatch } from 'react-redux';

import { buy_products_action, cancel_products_action, addTenProducts } from '../redux/actions/Action';

const Compra = () =>{
    const dispatch = useDispatch()

    return (<div>
        <button className="btn btn-dark btn sm mt-2" onClick={() =>{
            dispatch(buy_products_action(1));
        }}>
            Agregar Producto
        </button>

        <br />
        <button className="btn btn-dark btn sm mt-1" onClick={() =>{
            dispatch(addTenProducts());
        }}>
            Agregar 10 productos
        </button>
        <br/>
        <button className="btn btn-dark btn sm mt-1" onClick={() =>{
            dispatch(cancel_products_action());
        }}>
            Cancelar 
        </button>

    </div>)
}

export default Compra

// class Compra extends Component {
//     render () {
//         return (
//             <div>
//                <button className="btn btn-dark btn sm mt-2" onClick={() =>{
//                  this.props.buy_products_action(1);
//                 }}>
//                         Agregar Producto
//                </button>

//                <br />
               
//                <button className="btn btn-dark btn sm mt-1" onClick={() =>{
//                  this.props.cancel_products_action(1);
//                 }}>
//                         Cancelar 
//                </button>

//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (state) => {
//     return {
//         buy_products_action,
//         cancel_products_action
//     }
// }

// export default connect(null, mapDispatchToProps)(Compra);