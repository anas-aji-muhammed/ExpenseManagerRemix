import { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import React from 'react'
import MainHeader from './components/MainHeader'
import styles from '~/styles/shared.css'

function PublicLayout() {
  return (
    <>
    <MainHeader/>
    <Outlet/>
    </>
  )
}

export default PublicLayout

export const links: LinksFunction = () => [
    {
      rel: "stylesheet", href: styles
    }
  ];