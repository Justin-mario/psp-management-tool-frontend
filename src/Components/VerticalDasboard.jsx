import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adminDashBoardRoutes, devDashBoardRoutes } from "./DashboardRoutes";

const VerticalDasboard = () => {
  const location = useNavigate();

  const { adminInfo } = useSelector((state) => state.admin);
  const { devInfo } = useSelector((state) => state.developer);
  //console.log(adminInfo.roles)
  // console.log(adminInfo.roles)

  return (
    <Fragment>
      <div className="max-h-[100vh]">
        {adminInfo && adminInfo.roles == "ADMIN"
          ? adminDashBoardRoutes.map((menu) => {
              if (menu.grouptitle) {
                return (
                    <div className="text-gray-700 py-4 px-6 text-xs uppercase tracking-wide font-bold" key={menu.id}>{menu.title}</div>
                );
              } else {
                return (
                  <div key={menu.id} className="">
                    {/* menu item without any childern items like Documentation and Changelog items*/}
                    <Link
                      to={menu.link}
                      key={menu.id}
                      className={`px-6 py-2 flex items-center text-gray-400 font-medium leading-7 transition-all duration-500 whitespace-nowrap hover:text-gray-200 ${
                        location.pathname === menu.link ? "text-gray-200" : ""
                      }`}
                    >
                      {menu.title}
                    </Link>
                    {/* end of menu item without any childern items */}
                  </div>
                );
              }
            })
          : devInfo && devInfo.roles == "DEVELOPER"
          ? devDashBoardRoutes.map((menu) => {
              return (
                <div className="flex flex-col">
                  <div key={menu.id}>
                    {/* menu item without any childern items like Documentation and Changelog items*/}
                    <Link
                      to={menu.link}
                      key={menu.id}
                      className={`px-6 py-2 flex items-center text-gray-400 font-medium leading-7 transition-all duration-500 whitespace-nowrap hover:text-gray-200 ${
                        location.pathname === menu.link ? "text-gray-200" : ""
                      }`}
                    >
                      {menu.title}
                    </Link>
                    {/* end of menu item without any childern items */}
                  </div>
                </div>
              );
            })
          : location("/signin")}
      </div>
    </Fragment>
  );
};

export default VerticalDasboard;
