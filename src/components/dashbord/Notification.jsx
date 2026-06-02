import React,{useState} from 'react'
import Para from '../common/Para'
import { NOTIFICATION } from '../../utils/Helper'

const Notification = () => {

    const [notification, setNotification] = useState(NOTIFICATION)

    // clear All

    const handClearAll = () => {
        setNotification([])
    }

    // Single Clear

    const handClear = (id) => {
        setNotification(prev =>
            prev.filter(item => item.id !== id)
        )
    }
    return (
        <div className='h-270 overflow-y-auto  pb-28  bg-light-gray dark:bg-black'>
            <div className='false'>
                <div className='sm:p-7.5 py-6 px-4'>
                    <div className='flex items-center justify-between'>
                        <button onClick={handClearAll} className="flex items-center py-3.5 sm:px-6 px-3 gap-2 border border-blue dark:bg-white dark:border-transparent rounded-[47px] text-blue cursor-pointer">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span className='max-sm:hidden'>Clear</span> All
                        </button>
                        <div className=' relative'>
                            <select className="py-3.5 sm:pl-6 pl-3 pr-12.25 text-blue cursor-pointer outline-none rounded-[47px] border border-blue dark:bg-white dark:border-transparent font-medium text-[16px] leading-[160%] appearance-none">
                                <option value="ALL">All</option>
                                <option value="Today">Today</option>
                                <option value="1 Day Ago">1 Day Ago</option>
                                <option value="1 Week Ago">1 Week Ago</option>


                            </select>
                            <span className=' absolute right-6 top-7 translate-y-[-50%] pointer-events-none'>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.32218 6.29289C4.75176 5.90237 5.44824 5.90237 5.87782 6.29289L9.5 9.58579L13.1222 6.29289C13.5518 5.90237 14.2482 5.90237 14.6778 6.29289C15.1074 6.68342 15.1074 7.31658 14.6778 7.70711L10.2778 11.7071C9.84824 12.0976 9.15176 12.0976 8.72218 11.7071L4.32218 7.70711C3.89261 7.31658 3.89261 6.68342 4.32218 6.29289Z" fill="#0000F5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-7.5 border border-pale-gray rounded-2xl overflow-hidden">

                        {notification.length === 0 ? (<div className='p-6 text-center text-black-body'> NO Notification </div>) : (

                        notification.map((item) => (

                            <div key={item.id} className='group sm:px-6 px-3 py-4 border-b flex flex-row items-center justify-between border-light2-gray hover:bg-gray-bg  transition-all duration-300 cursor-pointer '>
                                <div>
                                    <h2 className='font-semibold sm:text-[18px] text-[16px] leading-[160%] text-black-head dark:text-white group-hover:text-black'>{item.title}</h2>
                                    <Para para={item.subtitle} vari="not" />
                                </div>

                                <button onClick={() => handClear(item.id)} className='flex gap-2 text-black group-hover:text-black dark:text-white cursor-pointer'>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className='max-sm:hidden'>Clear</span>
                                </button>
                            </div>
                        ))
                        
                    )}



                    </div>
                </div>
            </div>
        </div >
    )
}

export default Notification