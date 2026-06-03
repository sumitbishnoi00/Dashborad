import React from 'react'
import { STUDENT_RECORD } from '../../utils/Helper'

const Rohan = () => {
  return (
    <section className='h-500 p-7.5 bg-light-gray dark:bg-black'>
        <div className='max-w-398.75 w-full mx-auto flex flex-col'>
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

        
        </div>
    </section>
  )
}

export default Rohan