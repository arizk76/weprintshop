import React, { createContext, useReducer } from 'react';
import {
  CART_RETRIEVE_REQUEST,
  CART_RETRIEVE_SUCCESS,
  ORDER_SET,
} from './../utils/constants';

// Now create Context and save the results into Store and exported directly.
export const Store = createContext();

const order =
  typeof window !== 'undefined' && window.localStorage.getItem('order_receipt')
    ? JSON.parse(window.localStorage.getItem('order_receipt'))
    : null;
const initialState = {
  cart: { loading: true },
  order,
};

// Define a Store

// Reducer function will change store state based on action
function reducer(state, action) {
  switch (action.type) {
    case CART_RETRIEVE_REQUEST:
      return {
        ...state,
        cart: { loading: true },
      };
    case CART_RETRIEVE_SUCCESS:
      return {
        ...state,
        cart: { loading: false, data: action.payload },
      };
    case ORDER_SET:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}

// Store Provider function that will be applied to selected element needs to use created Store Context
// Provider need two props ( reducer state "current state"  and "Initial state")
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  // This will create a warper for all application into store provider
  // Need to modify pages ==> _app.js file for Next js
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
