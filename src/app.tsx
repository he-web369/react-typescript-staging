/*
 * @Author: hsl
 * @Descripttion: 入口组件
 * @Date: 2022-02-22 15:33:01
 * @LastEditTime: 2022-03-04 11:49:15
 */
import React from 'react'
import './global.less'
import './global.css'
import Home from './pages/home'
import Other from './pages/home/other'
import { ProviderStore } from './models/store'

const App = () => <ProviderStore>
      <Home />
      <Other />
  </ProviderStore>
export default App
