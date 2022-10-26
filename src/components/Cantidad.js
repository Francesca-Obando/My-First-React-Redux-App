//CANTIDAD.JSX: 

import React from 'react'
import { useSelector } from 'react-redux';

const Cantidad = () => {
    const carrito = useSelector((store)=>{

        return store.supermarket.Carrito
    })
    return <>
        Unidades: {carrito}
    </>
}

export default Cantidad

// class cantidad extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                Unidades: {this.props.supermarket.Carrito}
//             </React.Fragment>
//         )
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         supermarket: state.supermarket
//     }
// }

//Connect es una función que devuelve a otra función
//export default connect(mapStateToProps)(cantidad);