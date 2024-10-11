import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./Utils";
import { Action } from "./Action";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = { ...state };
    for (const key in Action) {
        contextValue[key] = Action[key].bind({ dispatch });
    }
    return (
        <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
    );
};
const useMainContext = () => {
    const context = useContext(MainContext);

    if (!context) {
        throw new Error("useMainContext must be used within a MainContextProvider");
    }

    return context;
};

export { MainContext, MainContextProvider, useMainContext };
