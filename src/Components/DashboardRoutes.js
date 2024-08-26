export const adminDashBoardRoutes= [
    {
        id: 1,
        title: "Dashboard",
        link: "/dashboard",
    },
    {
        id: 2,
        title: "Developers",
        children: [
          { id: 1, link: "/admin/create-developer", name: "Create a Developer" },
          { id: 2, link: "/admin/alldevs", name: "Check all Devs" },
        ],
    },
    {
        id: 3,
        title: "Projects",
        children: [
            { id: 1, link: "/admin/create-project", name: "Create a Project" },
            { id: 2, link: "/admin/allprojects", name: "Check all Projects" },
          ],
    },
    {
        id: 4,
        title: "Defects",
        link: "/admin/alldefects",
    },
]

export const devDashBoardRoutes= [
    {
        id: 1,
        title: "Dashboard",
        link: "/dashboard",
    },
    {
        id: 2,
        title: "Projects",
        link: "/dev/allprojects",
    },
    {
        id: 3,
        title: "Defects",
        link: "/dev/alldefects",
    },
    {
        id: 4,
        title: "Reset Password",
        link: "/change-password",
    },
]
