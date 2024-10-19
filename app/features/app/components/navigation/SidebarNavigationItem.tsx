import { NavLink } from '@remix-run/react'
import React from 'react'

function SidebarNavigationItem({ children, destRoute, menuTitle }) {
    return (

        <NavLink to={destRoute} 
            className='flex flex-row border-b border-gray-300 gap-2 justify-center items-center p-2'
            style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                //   color: isPending ? "red" : "black",
                  color:  isActive ? "#605BFF" : ""
                };
              }}>
                {children}
                <p>{menuTitle}</p>
        </NavLink>
    )
}

export default SidebarNavigationItem