//APP.JS: clase que nos permite realizar la estructura/esqueleto del proyecto

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { Provider } from 'react-redux'

import Cantidad from './components/Cantidad';
import Compra from './components/Compra';
import store from './redux/store';

const Application = ()=>{
  return(
     <Provider store= {store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{maxWidth: '570px'}}>
              <div className="row no-gutters">
                <div className="col-4">
                  <br />
                    <img src={require('./img/manzana.jpg')} alt="manzana" className= "card-img" />
                  <br />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                       <Cantidad/>
                    </div>
                       <Compra/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Application;
