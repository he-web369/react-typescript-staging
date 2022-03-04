/*
 * @Author: hsl
 * @Descripttion:
 * @Date: 2022-02-25 15:29:29
 * @LastEditTime: 2022-03-04 13:38:12
 */
import React, { useContext, useEffect } from 'react'

import { AppContext } from '../../models/store'

const Home = () => {
  const { state, wrapperDispatch } = useContext(AppContext)
  useEffect(() => {
    setTimeout(() => {
      wrapperDispatch({ type: 'async_add_count', payload: { count: state.count + 1 } })
    }, 2000)
  }, [state])// eslint-disable-line react-hooks/exhaustive-deps
  return <React.Fragment >
        <div>demo_react_{state.count}</div>
        <img style={{ width: 100, height: 100 }} src={require('../../assets/image.png')} />
    </React.Fragment>
}
export default Home
