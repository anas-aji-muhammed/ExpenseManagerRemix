import { NavLink } from '@remix-run/react'
import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import SidebarNavigationItem from './SidebarNavigationItem';
import { RiCurrencyLine } from "react-icons/ri";
import AuthStatusBar from '../../../auth/components/AuthStatus';
import Logo from '../../../../components/utils/Logo';

function AppSideBar() {
  return (
    <div className='flex flex-col justify-around min-h-screen '>
        <Logo/>
        <ul className='flex-1 space-y-4'>
          <SidebarNavigationItem destRoute="dashboard" menuTitle="Dashboard">
              <RiDashboardFill/>
          </SidebarNavigationItem>
          <SidebarNavigationItem destRoute="expenses" menuTitle="Expenses">
              <RiCurrencyLine />
          </SidebarNavigationItem>
        </ul>

        <AuthStatusBar/>

    </div>
  )
}

export default AppSideBar