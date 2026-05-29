import React from 'react'
import Sidebar from '../dashbord/Sidebar'
import Topbar from '../dashbord/Topbar'
import Content from '../dashbord/Content'

const Dashbord = () => {
    return (
        <div className='max-w-480 w-full mx-auto'>
            <div className='h-screen flex'>
                <Sidebar />
                <div className='grow flex flex-col'>
                    <Topbar />
                    <div className='grow'>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbord