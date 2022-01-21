import React, { createContext, useReducer, useEffect } from 'react';
import Axios from "axios";
import {AppReducer} from './AppReducer';


const initialState = {
    items: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
        useEffect(() => {
            Axios.get("http://localhost:3004/read").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });
        }, []);

    //actions
    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        })

    }

    const addItem = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })

        setTimeout(() => {
            Axios.get("http://localhost:3004/read").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });  
        },500)
    }

    const editItem = (item) => {
        dispatch({
            type: 'EDIT_ITEM',
            payload: item,
        })
    }
     
    return(
        <GlobalContext.Provider value={{
            items: state.items,
            removeItem,
            addItem,
            editItem,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}) ;