import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

const Sidebar = ({activePage, setActivePage}) => {

    const navigate = useNavigate()

  useEffect(() => {

    !localStorage.getItem("isLogin")
      ? navigate("/")
      : null
  }, [])

    const [showSidebar, setShowSidebar] = useState(false)

    function handLogout(){
        localStorage.removeItem("isLogin");
        navigate("/login");
    }

    return (
        <>
            <div className={`fixed lg:static top-0 left-0 z-40 min-h-screen max-w-81.25 w-full gap-5 mx-auto flex flex-col items-center  bg-white-head shadow-[8px_0px_19.1px_0px_#004B8F0D] transition-transform duration-700 ease-in-out ${showSidebar ? "translate-x-0 p-8" : "-translate-x-full lg:translate-x-0 px-6 py-4"} `}>

                <img src="/assets/dashboard-logo.webp" className='w-full h-[64.84px]' alt="dashboard-logo" />

                <div className='w-full flex flex-col gap-1 mt-5'>

                    <Button icon={activePage === "dashboard" ? "/assets/Dashboard-btn-active.webp" : "/assets/Dashboard-btn.webp"} btn="Dashboard" vari={activePage === "dashboard" ? "pri" : "sec"} onClick={() => setActivePage("dashboard")} />

                    <Button icon="/assets/Academic-btn.webp" btn="Academic Performance" vari="sec" />

                    <Button icon="/assets/fees-btn.webp" btn="Fee status" vari="sec" /> 
                </div>

                <div className='w-full flex flex-col gap-1'>

                    <Button icon="/assets/settings-btn.webp" btn="Settings" vari="sec" /> 

                    <Button icon="/assets/logout-btn.webp" btn="Log Out" vari="dan" onClick={handLogout} /> 
                </div>

            </div>
            <button onClick={() => setShowSidebar(!showSidebar)} className='lg:hidden relative w-6 h-6 z-500 cursor-pointer'>
                <span className=' absolute left-1 md:top-11.5 top-10.5 w-6 h-1 bg-black rounded transition-all duration-500 '></span>
                <span className=' absolute left-1 md:top-13.25 top-12.25 w-6 h-1 bg-black rounded transition-all duration-500 '></span>
                <span className=' absolute left-1 md:top-15 top-14  w-6 h-1 bg-black rounded transition-all duration-500 '></span>
            </button>
        </>
    )
}

export default Sidebar