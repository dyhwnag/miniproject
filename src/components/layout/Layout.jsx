import React from 'react'
import Header from '../header/Header'
import { LayoutBody } from './LayoutStyle'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutBody>
        {children}
      </LayoutBody>
    </>

  )
}
export default Layout;

