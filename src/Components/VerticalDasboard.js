import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CustomToggle from './CustomToggle'
import { Link, useNavigate } from 'react-router-dom'
import { adminDashBoardRoutes, devDashBoardRoutes } from './DashboardRoutes'
import { Accordion, ListGroup } from 'react-bootstrap'

const VerticalDasboard = () => {
    const location = useNavigate()

    const {adminInfo} = useSelector(state => state.admin)
    const {devInfo} = useSelector(state => state.developer)
    //console.log(adminInfo.roles)
    // console.log(adminInfo.roles)
    
  return (
    <Fragment>
        <div className='max-h-[100vh]'>
            {
                adminInfo && adminInfo.roles == "ADMIN" ? 
                    adminDashBoardRoutes.map((menu) => {
                        if(menu.children){
                            return( 
                                <Fragment key={menu.id}>
                                    <CustomToggle eventKey={menu.id}>
                                        {menu.title}
                                    </CustomToggle>
                                    {/* <Accordion.Collapse eventKey={index} as="ul"> */}
                                        <ListGroup as="ul" bsprefix="" className="flex-col">
                                            {menu.children.map((child, childIndex) => {
                                                return (
                                                    <ListGroup.Item
                                                        as="li"
                                                        key={childIndex}
                                                    >
                                                        <Link
                                                            to={child.link}
                                                            className={`nav-link ${
                                                                location.pathname === menu.link ? "active" : ""
                                                            }`}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </ListGroup.Item>
                                                )    
                                            })}
                                        </ListGroup>
                                    {/* </Accordion.Collapse> */}
                                </Fragment>
                            )
                        }else{
                            return (
                                <div key={menu.id} className=''>
                                    {/* menu item without any childern items like Documentation and Changelog items*/}
                                    <Link
                                        to={menu.link}
                                        className={`nav-link ${
                                            location.pathname === menu.link ? "active" : ""
                                        }`}
                                    >
                                        {menu.title}
                                    </Link>
                                    {/* end of menu item without any childern items */}
                                </div>
                            )
                        }
                    })
                : devInfo && devInfo.roles == "DEVELOPER" ?
                        devDashBoardRoutes.map((menu) => {
                            return (
                                <div className='flex flex-col'>
                                    <div key={menu.id}>
                                        {/* menu item without any childern items like Documentation and Changelog items*/}
                                        <Link
                                            to={menu.link}
                                            className={`nav-link ${
                                                location.pathname === menu.link ? "active" : ""
                                            }`}
                                        >
                                            {menu.title}
                                        </Link>
                                        {/* end of menu item without any childern items */}
                                    </div>
                                </div>
                            )
                        })
                : location("/signin")
            }
        </div>
    </Fragment>
  )
}

export default VerticalDasboard