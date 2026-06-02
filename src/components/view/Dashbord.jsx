import React, { useState, useEffect } from 'react'
import Sidebar from '../dashbord/Sidebar'
import Topbar from '../dashbord/Topbar'
import Content from '../dashbord/Content'
import Notification from '../dashbord/Notification'
import { useNavigate } from 'react-router-dom'

const Dashbord = () => {

    const navigate = useNavigate();

    useEffect(() => {
        !localStorage.getItem("isLogin")
            ? navigate("/login")
            : null
    }, [])

    const [activePage, setActivePage] = useState("dashboard");

    useEffect(() => {
        localStorage.getItem("activePage")
            ? setActivePage(localStorage.getItem("activePage"))
            : null
    }, []);

    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);
    return (
        <>
            <div className='max-w-480 w-full mx-auto'>
                <div className='h-screen flex'>
                    <Sidebar activePage={activePage} setActivePage={setActivePage} />
                    <div className='grow flex flex-col'>
                        <Topbar activePage={activePage} setActivePage={setActivePage} />
                        <div className='grow h-270 overflow-y-auto'>
                            {
                                activePage === "dashboard"
                                    ? <Content />
                                    : <Notification />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord