import React from 'react'
import { STUDENT_RECORD, STUDENT_RECORD_2 } from '../../utils/Helper'

const Rohan = () => {
    return (
        <section className='h-800 p-7.5 bg-light-gray dark:bg-black'>
            <div className='max-w-398.75 w-full mx-auto flex flex-col gap-7.5'>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-7.5'>
                    {STUDENT_RECORD.map((item, index) => (

                        <div key={index} className='bg-white p-4.5 border rounded-xl border-mist-blue hover:shadow-[0px_4px_0px_0px_#004B8F]'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h2 className='font-semibold text-[32px] leading-[160%] text-dark-navy'>{item.value}</h2>
                                    <p className='font-normal text-[16px] leading-[160%] text-black-head'>{item.label}</p>
                                </div>
                                <div className='w-[75.16px] h-[75.16px] rounded-[88.94px] bg-ghost-lavender flex items-center justify-center'>
                                    <img src={item.Image} style={{ width: item.width, height: item.height }} className=' object-contain' alt="record-img" />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className='flex flex-col xl:flex-row items-center justify-center gap-6 lg:gap-9 lg:p-7.5 sm:p-6 p-4 border rounded-2xl border-mist-blue' >
                    <div>
                        <img src="/assets/Rohan Duhan.webp" className='lg:w-121 sm:max-w-100 max-w-62.5 w-full lg:h-124.5 h-auto object-center object-cover rounded-[10px]' alt="Rohan Duhan" />
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex sm:flex-row flex-col  gap-3 mb-7.5 max-xl:justify-center'>
                            <h3 className='font-semibold sm:text-[28px] text-2xl leading-[150%] text-black-head dark:text-white'>Rohan Duhan</h3>
                            <div className='py-1.5 px-3.5 border rounded-[73px] border-dark-navy bg-light2-gray w-fit'>
                                <p className='font-normal sm:text-[16px] text-sm leading-[160%] text-dark-navy'>Class 2nd</p>
                            </div>
                        </div>
                        <div>
                            <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-y-12 mb-10'>
                                {STUDENT_RECORD_2.map((item, index) => (

                                    <div key={index} className='flex flex-row items-center gap-4.5 max-xl:justify-center max-xl:text-center'>
                                        <div className='w-21.5 h-21.5 rounded-[74px] bg-ghost-lavender flex items-center justify-center'>
                                            <img src={item.image} className='w-13.75 h-13.75 object-contain' alt="record2-img" />
                                        </div>
                                        <div className='flex flex-col gap-0.75'>
                                            <p className='font-normal text-[14px] leading-[160%] text-dim-gray'>{item.para}</p>
                                            <h4 className='max-w-49.75 font-medium text-[16px] leading-[160%] text-black-head dark:text-white'>{item.heading}</h4>
                                        </div>
                                    </div>

                                ))}
                            </div>

                            <h3 className='font-medium text-[20px] leading-[160%] text-black-head mb-3.5'>Subjects:</h3>

                            <div className="flex flex-row justify-between gap-2 flex-wrap">
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-[28.5px] text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    Math
                                </div>
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-3 text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    Computer
                                </div>
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-5.25 text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    English
                                </div>
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-4.5 text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    Science
                                </div>
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-7.25 text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    Hindi
                                </div>
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-8 text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    S.S.T
                                </div>
                                <div className="border bg-very-light-gray rounded-[73px] border-dark-navy px-[35.5px] text-[16px] font-normal leading-[160%] text-indigo-blue py-1.5">
                                    Art
                                </div>
                                <div className="border rounded-[73px] border-dark-navy px-3.5 text-[16px] dark:text-white font-normal leading-[160%] text-indigo-blue py-1.5">
                                    See Daily Schedule
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-7.5 max-[1400px]:grid-cols-1'>
                    <div className='flex flex-col border border-mist-blue rounded-2xl'>
                        <div className='w-full flex flex-row flex-wrap items-center justify-between max-[1400px]:justify-start gap-4 py-5 px-6'>
                            <p className='font-semibold text-2xl leading-[130%] text-black-head dark:text-white'>1st term Exam Score</p>

                            <div className=' relative ml-auto'>
                                <select className="py-3.5 sm:pl-6 pl-3 pr-12.25 text-blue cursor-pointer outline-none rounded-[47px] border border-blue dark:bg-white dark:border-transparent font-medium text-[16px] leading-[160%] appearance-none">
                                    <option value="ALL">1st Term Exam Result </option>
                                    <option value="Today">2nd Term Exam Result </option>

                                </select>
                                <span className=' absolute right-6 top-7 translate-y-[-50%] pointer-events-none'>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.32218 6.29289C4.75176 5.90237 5.44824 5.90237 5.87782 6.29289L9.5 9.58579L13.1222 6.29289C13.5518 5.90237 14.2482 5.90237 14.6778 6.29289C15.1074 6.68342 15.1074 7.31658 14.6778 7.70711L10.2778 11.7071C9.84824 12.0976 9.15176 12.0976 8.72218 11.7071L4.32218 7.70711C3.89261 7.31658 3.89261 6.68342 4.32218 6.29289Z" fill="#0000F5" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className='w-full overflow-hidden overflow-x-auto'>
                            <table className='max-w-188.25 w-full'>
                                <tbody>
                                    <tr className='bg-dark-blue'>
                                        <th className='py-5.25 pl-6 text-left text-white text-[16px] leading-[100%] font-semibold'>Exam</th>
                                        <th className='py-5.25 pl-6 text-left text-white text-[16px] leading-[100%] font-semibold'>Total Marks</th>
                                        <th className='py-5.25 pl-6 text-left text-white text-[16px] leading-[100%] font-semibold'>Marks</th>
                                        <th className='py-5.25 pl-6 text-left text-white text-[16px] leading-[100%] font-semibold'>Status</th>
                                        <th className='py-5.25 pl-6 text-left text-white text-[16px] leading-[100%] font-semibold'>Grade</th>
                                    </tr>
                                    <tr className='border border-b border-very-light-gray'>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>Maths</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>100</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>92</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-other-green '>Pass</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>A+</td>
                                    </tr>
                                    <tr className='border border-b border-very-light-gray'>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>Hindi</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>100</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>87</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-other-green '>Pass</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>B+</td>
                                    </tr>
                                    <tr className='border border-b border-very-light-gray'>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>Hindi Grammar</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>60</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>55</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-other-green '>Pass</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>A</td>
                                    </tr>
                                    <tr className='border border-b border-very-light-gray'>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>English</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>100</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>90</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-other-green '>Pass</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>A+</td>
                                    </tr>
                                    <tr className='border border-b border-very-light-gray'>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>English Grammar</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>60</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>52</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-other-green '>Pass</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>A+</td>
                                    </tr>
                                    <tr>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>Computer</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>80</td>
                                        <td className='py-5.75 pl-6 text-black-head dark:text-white '>70</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-other-green '>Pass</td>
                                        <td className='py-5.75 pl-6 font-normal text-[16px] leading-[160%] text-black-head dark:text-white'>B+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='flex flex-col gap-7.5'>
                        <h1 className='font-semibold text-2xl leading-[130%] text-black-head dark:text-white'>Attendance Data</h1>

                        <div className='py-10.5 px-7.5 border rounded-2xl dark:bg-white border-mist-blue'>
                            <img src="/assets/Attendance Data.webp" className='w-173 h-[432.32px] ' alt="Attendance Data" />
                        </div>
                    </div>
                </div>

                <div className=' max-w-296.5 p-6 max-lg:p-5 max-md:p-4 gap-4 border border-periwinkle-gray bg-very-light-lavender rounded-2xl flex flex-col'>
                    <h1 className='font-semibold text-2xl leading-[130%] text-black-head'>Teacher Feedback:</h1>
                    <p className='font-normal text-[16px] leading-[160%] text-vary-charcoal-gray'>Teachers have consistently praised your child for their exceptional effort and active participation in class. Their enthusiasm and dedication are evident in their approach to learning and their contributions to classroom discussions. Teachers have noted several key aspects of your child’s performance:</p>

                    <ul className='list-disc marker:text-dark-navy pl-5 flex flex-col gap-4'>
                        <li className='font-normal text-[16px] leading-[160%] text-black-body'>
                            <span className='font-semibold text-[18px] leading-[160%] text-dark-navy'>Engaged Learning: </span> Your child actively engages with the material, asking insightful questions and seeking to deepen their understanding of complex concepts.
                        </li>

                        <li className='font-normal text-[16px] leading-[160%] text-black-body'>
                            <span className='font-semibold text-[18px] leading-[160%] text-dark-navy'>Collaborative Spirit: </span> They work effectively with peers, demonstrating leadership and teamwork skills during group projects and collaborative assignments.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Rohan