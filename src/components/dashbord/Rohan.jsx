import React from 'react'
import { BUTTON, STUDENT_RECORD, STUDENT_RECORD_2 } from '../../utils/Helper'

const Rohan = () => {
  return (
    <section className='h-500 p-7.5 bg-light-gray dark:bg-black'>
        <div className='max-w-398.75 w-full mx-auto flex flex-col gap-7.5'>
            <div className='grid grid-cols-4 gap-7.5'>
                {STUDENT_RECORD.map((item, index) => (

                    <div key={index} className='bg-white p-4.5 border rounded-xl border-mist-blue hover:shadow-[0px_4px_0px_0px_#004B8F]'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='font-semibold text-[32px] leading-[160%] text-dark-navy'>{item.value}</h2>
                                <p className='font-normal text-[16px] leading-[160%] text-black-head'>{item.label}</p>
                            </div>
                            <div className='w-[75.16px] h-[75.16px] rounded-[88.94px] bg-ghost-lavender flex items-center justify-center'>
                                <img src={item.Image} style={{width: item.width, height: item.height}} className=' object-contain' alt="record-img" />
                            </div>  
                        </div>
                    </div>

                ))}
            </div>

            <div className='flex flex-row items-center justify-center gap-9 p-7.5 border rounded-2xl border-mist-blue' >
                <div>
                    <img src="/assets/Rohan Duhan.webp" className='w-121 h-124.5 object-center object-cover rounded-[10px]' alt="Rohan Duhan" />
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-row gap-3 mb-7.5'>
                        <h3 className='font-semibold text-[28px] leading-[150%] text-black-head'>Rohan Duhan</h3>
                        <div className='py-1.5 px-3.5 border rounded-[73px] border-dark-navy bg-light2-gray'>
                            <p className='font-normal text-[16px] leading-[160%] text-dark-navy'>Class 2nd</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-y-12 mb-10'>
                        {STUDENT_RECORD_2.map((item, index) => (

                            <div key={index} className='flex flex-row items-center gap-4.5'>
                                <div className='w-21.5 h-21.5 rounded-[74px] bg-ghost-lavender flex items-center justify-center'>
                                    <img src={item.image} className='w-13.75 h-13.75 object-contain' alt="record2-img" />
                                </div>
                                <div className='flex flex-col gap-0.75'>
                                    <p className='font-normal text-[14px] leading-[160%] text-dim-gray'>{item.para}</p>
                                    <h4 className='font-medium text-[16px] leading-[160%] text-black-head'>{item.heading}</h4>
                                </div>
                            </div>

                        ))}
                    </div>
                    
                    <h3 className='font-medium text-[20px] leading-[160%] text-black-head mb-3.5'>Subjects:</h3>

                    <div className='flex flex-wrap gap-3 items-center'>
                        {BUTTON.map((item, index) => (

                            <button key={index} className={`py-1.5 px-3.5 border rounded-[73px] border-dark-blue font-normal text-[16px] leading-[160%] text-dark-blue ${item === "See Daily Schedule" ? "" : "bg-light2-gray"} `}>
                                {item}
                            </button>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rohan