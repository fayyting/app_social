import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Sidebar/>
            <Outlet />
        </>
    )
};

export default Layout;