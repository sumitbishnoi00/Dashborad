import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import Heading from '../common/Heading'

const Sidebar = ({ activePage, setActivePage, darkmode }) => {

    const navigate = useNavigate()

    useEffect(() => {

        !localStorage.getItem("isLogin")
            ? navigate("/")
            : null
    }, [])

    const [showSidebar, setShowSidebar] = useState(false)

    function handLogout() {
        localStorage.removeItem("isLogin");
        navigate("/login");
    }

    return (
        <>
            <div className={`fixed lg:static top-0 left-0 z-40 min-h-screen max-w-81.25 w-full gap-5 mx-auto flex flex-col items-center  bg-white-head dark:bg-dark-blue shadow-[8px_0px_19.1px_0px_#004B8F0D] transition-transform duration-700 ease-in-out ${showSidebar ? "translate-x-0 p-8" : "-translate-x-full lg:translate-x-0 px-6 py-4"} `}>

                <Heading
                    heading=
                    {activePage === "dashboard"
                        ? "Dashboard"
                        : activePage === "academic"
                            ? "Performance"
                            : "Notification"
                    }
                    vari="mob" />

                {
                    darkmode ? (
                        <img
                            src="/assets/dark-dashboard-logo.webp"
                            className="w-full h-[64.84px] max-lg:hidden"
                            alt="dark-dashboard-logo"
                        />
                    ) : (
                        <img
                            src="/assets/dashboard-logo.webp"
                            className="w-full h-[64.84px] max-lg:hidden"
                            alt="dashboard-logo"
                        />
                    )
                }

                <div className='w-full flex flex-col gap-1 mt-5'>

                    <Button icon={
                        activePage === "dashboard"
                            ? "/assets/Dashboard-btn-active.webp"
                            : document.documentElement.classList.contains("dark")
                                ? "/assets/Dashboard-btn-active.webp"
                                : "/assets/Dashboard-btn.webp"
                    }
                        btn="Dashboard" vari={activePage === "dashboard" ? "pri" : "sec"} onClick={() => setActivePage("dashboard")} />

                    <Button icon=
                        {activePage === "academic"
                            ? "/assets/Academic-white.webp"
                            : document.documentElement.classList.contains("dark")
                                ? "/assets/Academic-white.webp"
                                : "/assets/Academic-btn.webp"
                        }
                        btn="Academic Performance" vari={activePage === "academic" ? "pri" : "sec"} onClick={() => setActivePage("academic")} />

                    <Button icon={darkmode ? "/assets/Fee-white.webp" : "/assets/fees-btn.webp"} btn="Fee status" vari="sec" />
                </div>

                <div className='w-full flex flex-col gap-1'>

                    <Button icon={darkmode ? "/assets/Settings-white.webp" : "/assets/settings-btn.webp"} btn="Settings" vari="sec" />

                    <Button icon="/assets/logout-btn.webp" btn="Log Out" vari="dan" onClick={handLogout} />
                </div>

            </div>
            <button onClick={() => setShowSidebar(!showSidebar)} className='lg:hidden relative w-6 h-6 z-500 cursor-pointer'>
                <span className=' absolute sm:left-7 left-3.5 md:top-11.5 top-10.5 w-6 h-1 bg-black dark:bg-white rounded transition-all duration-500 '></span>
                <span className=' absolute sm:left-7 left-3.5 md:top-13.25 top-12.25 w-6 h-1 bg-black dark:bg-white rounded transition-all duration-500 '></span>
                <span className=' absolute sm:left-7 left-3.5 md:top-15 top-14  w-6 h-1 bg-black dark:bg-white rounded transition-all duration-500 '></span>
            </button>
        </>
    )
}

export default Sidebar