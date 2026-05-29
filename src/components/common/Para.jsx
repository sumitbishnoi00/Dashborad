import React from 'react'

const Para = ({para, vari}) => {
    const variants = {
        pri: "text-[16px] text-lavender-gray",
        sec: "text-[14px] text-dim-gray",
        dan: "md:text-[14px] text-[12px] text-dark-navy"
    }
  return (
    <p className={`font-normal leading-[160%] ${variants[vari]}`}>{para}</p>
  )
}

export default Para