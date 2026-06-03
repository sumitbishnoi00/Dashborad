import React, { useState } from 'react'
import Heading from '../common/Heading'
import Para from '../common/Para'
import { useNavigate } from 'react-router-dom'

const Topbar = ({ activePage, setActivePage, darkmode, setDarkmode }) => {

    // const [darkmode, setDarkmode] = useState(false)

    function changecolor() {

        const newMode = !darkmode;

        setDarkmode(newMode);

        newMode
            ?
            document.documentElement.classList.add("dark")

            :
            document.documentElement.classList.remove("dark")

    }

    return (
        <section className=' md:px-7.5 pl-8 sm:pr-5 pr-2 py-7 bg-white-head dark:bg-dark-blue shadow-[0px_8px_19.1px_0px_#004B8F0D] transition-all duration-500 z-50'>
            <div className='max-w-398.75 w-full mx-auto flex items-center justify-between'>



                {
                    darkmode ? (
                        <img
                            src="/assets/dark-dashboard-logo.webp"
                            className="w-37.75 h-[40.1px] lg:hidden"
                            alt="dark-dashboard-logo"
                        />
                    ) : (
                        <img
                            src="/assets/dashboard-logo.webp"
                            className="w-37.75 h-[40.1px] lg:hidden"
                            alt="dashboard-logo"
                        />
                    )
                }

                <Heading
                    heading={
                        activePage === "dashboard"
                            ? "Dashboard"
                            : activePage === "academic"
                                ? "Performance"
                                : "Notification"
                    }
                    vari="pri" />

                <div className='flex items-center md:gap-8.75 sm:gap-4 gap-1'>

                    <button onClick={changecolor} className='md:p-3 sm:p-2 p-1 border border-solid cursor-pointer rounded-full  border-black flex items-center justify-center'>
                        <img src={darkmode ? "/assets/sun.webp" : "/assets/moon.webp"} alt="theme icon" className='w-6 h-6' />
                    </button>

                    <button onClick={() => setActivePage("notification")} className=' cursor-pointer'>
                        <span>
                            <svg className='lg:w-14.75 lg:h-14.75 md:w-11.25 md:h-11.25 w-8.75 h-8.75' width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="29.0509" cy="29.0509" r="29.0509" fill={activePage === "notification" ? "#0000F5" : "#E6E6F1"} />
                                <g clip-path="url(#clip0_89_189)">
                                    <path d="M28.4025 42.9952C25.9006 42.9952 23.8633 40.9593 23.8633 38.456C23.8633 37.9549 24.27 37.5482 24.7711 37.5482C25.2723 37.5482 25.679 37.9549 25.679 38.456C25.679 39.9583 26.9015 41.1796 28.4025 41.1796C29.9034 41.1796 31.126 39.9583 31.126 38.456C31.126 37.9549 31.5327 37.5482 32.0339 37.5482C32.535 37.5482 32.9417 37.9549 32.9417 38.456C32.9417 40.9593 30.9046 42.9952 28.4025 42.9952Z" fill={activePage === "notification" ? "#FFFFFF" : "#02066F"} />
                                    <path d="M38.389 39.3639H18.4164C17.2484 39.3639 16.2982 38.4137 16.2982 37.2457C16.2982 36.6258 16.5682 36.0389 17.0389 35.6357C17.0693 35.6091 17.1019 35.5849 17.1358 35.563C18.9127 34.0124 19.9296 31.7816 19.9296 29.426V26.0488C19.9296 21.3766 23.7316 17.5757 28.4027 17.5757C28.5964 17.5757 28.8059 17.5793 28.9996 17.6121C29.4945 17.6943 29.8287 18.1629 29.7463 18.6567C29.6641 19.1505 29.1871 19.4847 28.7017 19.4023C28.6048 19.3865 28.4984 19.3914 28.4027 19.3914C24.7328 19.3914 21.7453 22.3776 21.7453 26.0488V29.426C21.7453 32.3505 20.4633 35.1177 18.2314 37.0167C18.2132 37.0314 18.1975 37.0447 18.178 37.058C18.1454 37.0992 18.1139 37.1621 18.1139 37.2457C18.1139 37.4102 18.252 37.5482 18.4164 37.5482H38.389C38.5536 37.5482 38.6917 37.4102 38.6917 37.2457C38.6917 37.1608 38.6602 37.0992 38.6263 37.058C38.6082 37.0447 38.5924 37.0314 38.5742 37.0167C36.341 35.1164 35.0603 32.3505 35.0603 29.426V28.1068C35.0603 27.6056 35.4671 27.1989 35.9682 27.1989C36.4693 27.1989 36.876 27.6056 36.876 28.1068V29.426C36.876 31.7829 37.894 34.0148 39.6734 35.5668C39.7059 35.5885 39.7374 35.6115 39.7664 35.637C40.2374 36.0389 40.5074 36.6258 40.5074 37.2457C40.5074 38.4137 39.5572 39.3639 38.389 39.3639Z" fill={activePage === "notification" ? "#FFFFFF" : "#02066F"} />
                                    <path d="M36.8752 26.0489C33.538 26.0489 30.8229 23.334 30.8229 19.9968C30.8229 16.6595 33.538 13.9444 36.8752 13.9444C40.2125 13.9444 42.9274 16.6595 42.9274 19.9968C42.9274 23.334 40.2125 26.0489 36.8752 26.0489ZM36.8752 15.7601C34.5389 15.7601 32.6386 17.6605 32.6386 19.9968C32.6386 22.3329 34.5389 24.2332 36.8752 24.2332C39.2113 24.2332 41.1117 22.3329 41.1117 19.9968C41.1117 17.6605 39.2113 15.7601 36.8752 15.7601Z" fill={activePage === "notification" ? "#FFFFFF" : "#F31D00"} />
                                    <path d="M36.8752 15.7601C34.5389 15.7601 32.6386 17.6605 32.6386 19.9968C32.6386 22.3329 34.5389 24.2332 36.8752 24.2332C39.2113 24.2332 41.1117 22.3329 41.1117 19.9968C41.1117 17.6605 39.2113 15.7601 36.8752 15.7601Z" fill={activePage === "notification" ? "#FFFFFF" : "#F31D00"} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_89_189">
                                        <rect width="29.0509" height="29.0509" fill="white" transform="translate(15.1056 13.9444)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </button>
                    <div className='flex gap-2.75 max-lg:items-center'>
                        <img src="/assets/Rajpal Singh.webp" className='lg:w-[65.07px] md:w-[43.1px] w-[33.1px] lg:h-[65.07px] md:h-[43.1px] h-[33.1px]' alt="Rajpal Singh" />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold ld:text-[18px] md:text-[16px] text-[14px] leading-[160%] text-black-head dark:text-white max-md:hidden'>Rajpal Singh</h3>
                            <Para para="Parent" vari="dan" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar