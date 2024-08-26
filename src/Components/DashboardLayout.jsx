import React from 'react'
import TopNav from './TopNav'
import VerticalDasboard from './VerticalDasboard'

const DashboardLayout = (props) => {
  return ( 
    <div className='overflow-x-hidden flex'>
      <div className="fixed top-0 bottom-0 w-[250px] bg-gray-800 py-2.5 px-6 border-r border-gray-800">
        <VerticalDasboard/>
      </div>
      <div className='min-h-screen min-w-full ml-[15.625rem] transition-[margin] duration-[250ms] ease-out'>
        <div className="header">
          <TopNav/>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default DashboardLayout