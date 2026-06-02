import React from 'react'

const Para = ({para, vari}) => {
    const variants = {
        pri: "text-[16px] text-lavender-gray",
        sec: "text-[14px] text-dim-gray dark:text-white",
        dan: "md:text-[14px] text-[12px] text-dark-navy dark:text-white max-md:hidden",
        not: "sm:text-[14px] text-[12px] text-dark-navy dark:text-white group-hover:text-black"
    }
  return (
    <p className={`font-normal leading-[160%] ${variants[vari]}`}>{para}</p>
  )
}

export default Para