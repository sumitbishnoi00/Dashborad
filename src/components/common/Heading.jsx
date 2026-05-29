import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "lg:text-4xl md:text-3xl sm:text-2xl text-[20px] text-black-head lg:max-w-129 md:max-w-80 sm:max-w-50 max-w-25 w-full",
        sec: "w-full text-[40px] text-white-head mb-2",
        dan: "text-[28px] text-black-head mt-7.5 xl:text-left text-center"
    }
  return (
    <h2 className={`font-semibold leading-[130%] ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading