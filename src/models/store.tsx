/*
 * @Author: hsl
 * @Descripttion: data_store
 * @Date: 2022-03-04 11:45:49
 * @LastEditTime: 2022-03-04 14:49:49
 */
import React, { useReducer } from 'react'
import {
  initialState, appReducer, StateProps, ActionProps, effects,
} from './index'

interface ContextProps {
    state: StateProps;
    wrapperDispatch: (action: ActionProps) => void;
}

export const AppContext = React.createContext({} as ContextProps)

export const ProviderStore = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const wrapperDispatch = (action: ActionProps) => {
    if (action.type === 'SET_PARAMS') {
      dispatch(action)
    } else effects[action.type](state, dispatch)
  }
  return <AppContext.Provider value={{ state, wrapperDispatch }}>
    {children}
    </AppContext.Provider>
}
