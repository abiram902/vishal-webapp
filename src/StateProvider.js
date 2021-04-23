import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

function StateProvider({ reducer, initialState, children }) {
  return (
    <div>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    </div>
  );
}
export const useState = () => useContext(StateContext);

export default StateProvider;
