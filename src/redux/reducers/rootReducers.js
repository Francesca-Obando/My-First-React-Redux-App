import { combineReducers } from 'redux';
import supermarket from "./Reducer";

//Combina los reducers que van a trabajar en el supermarket
const rootReducers = combineReducers({
      supermarket
})

export default rootReducers;