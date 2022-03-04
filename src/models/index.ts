/*
 * @Author: hsl
 * @Descripttion:
 * @Date: 2022-02-25 15:34:14
 * @LastEditTime: 2022-03-04 14:24:33
 */
import { Dispatch } from 'react'
import Request from '../services/request'

export interface StateProps {
    count: number
}

export interface ActionProps {
    type: string;
    payload: object;
}

export const initialState:StateProps = {
  count: 0,
}

// 累加
export const appReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'SET_PARAMS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// 异步更改
export const effects = {
  async_add_count: async (state:StateProps, dispatch: Dispatch<ActionProps>) => {
    const res = await Request('/login', 'post')
    if (res.suc) dispatch({ type: 'SET_PARAMS', payload: { count: res.data } })
    else alert(res.msg)
  },
}
