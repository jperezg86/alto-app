import React, { Reducer, useContext } from "react"
import { createContext } from "react"

type AppStateType = {
    activePage : string | null
}

const initialState = {
    activePage : null
}

const AppStateContext = createContext<[AppStateType, React.Dispatch<any>]>([initialState, () =>{}])

export enum APP_ACTIONS {
    SET_ACTIVE_MENU
}

export type AppAction = {
    type: APP_ACTIONS,
    payload: any
}

const AppReducer: Reducer<AppStateType,AppAction> = (
    state: AppStateType,
    action : AppAction
) => {
    switch(action?.type) {
        case APP_ACTIONS.SET_ACTIVE_MENU: 
            return {
                ...state,
                activePage: action?.payload
            }
    
        default: 
        return state
    }
}

const AppStateProvider = ({
   children 
} : {
    children: JSX.Element | JSX.Element[]
}) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState)
    return <AppStateContext.Provider value={[state, dispatch]}>
        {children}
    </AppStateContext.Provider>
    
} 


export const useAppState = () => {
    return useContext(AppStateContext)
}

export default AppStateProvider
