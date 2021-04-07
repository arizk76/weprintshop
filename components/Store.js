import React, { createContext, useReducer } from 'react';

// Now create Context and save the results into Store and exported directly.
export const Store = createContext();

// Define a Store

// Reducer function will change store state based on action
function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
const initialState = {
  cart: { loading: true },
  order: null,
};

// Store Provider function that will be applied to selected element needs to use created Store Context
// Provider need two props ( reducer state "current state"  and "Initial state")
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  // This will create a warper for all application into store provider
  // Need to modify pages ==> _app.js file for Next js
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
