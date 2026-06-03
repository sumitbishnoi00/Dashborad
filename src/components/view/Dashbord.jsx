import React, { useState, useEffect } from 'react'
import Sidebar from '../dashbord/Sidebar'
import Topbar from '../dashbord/Topbar'
import Content from '../dashbord/Content'
import Notification from '../dashbord/Notification'
import Academic from '../dashbord/Academic'
import { useNavigate } from 'react-router-dom'
import Mohan from '../dashbord/Mohan'
import Sohan from '../dashbord/Sohan'
import Rohan from '../dashbord/Rohan'

const Dashbord = () => {

    const [darkmode, setDarkmode] = useState(false)

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
                    <Sidebar activePage={activePage} setActivePage={setActivePage} darkmode={darkmode} />
                    <div className='grow flex flex-col'>
                        <Topbar activePage={activePage} setActivePage={setActivePage} darkmode={darkmode} setDarkmode={setDarkmode} />
                        <div className='grow h-200 overflow-y-auto'>
                            {
                                activePage === "dashboard"
                                    ? <Content />
                                    : activePage === "academic"
                                        ? <Academic setActivePage={setActivePage} />
                                        : activePage === "notification"
                                            ? <Notification />
                                            : activePage === "mohan"
                                                ? <Mohan />
                                                : activePage === "sohan"
                                                    ? <Sohan />
                                                    : activePage === "rohan"
                                                        ? <Rohan />
                                                        : <Content />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord