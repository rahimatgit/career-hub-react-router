import { NavLink, Outlet } from "react-router-dom";


const Root = () => {

    const links = <>
        <NavLink to='/'>
            <button className="btn btn-primary mr-4">Home</button>
        </NavLink>
        <NavLink to='/applied_jobs'>
            <button className="btn btn-primary mr-4">Applied Jobs</button>
        </NavLink>
    </>

    return (
        <div className="w-[80%] mx-auto mt-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/zSsxWF4/Career-Hub.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            <div className="flex justify-center mt-10">

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;