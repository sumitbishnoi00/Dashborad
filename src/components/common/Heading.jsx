import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "text-4xl text-black-head max-w-129 w-full",
        sec: "w-full text-[40px] text-white-head mb-2",
        dan: "text-[28px] text-black-head mt-7.5"
    }
  return (
    <h2 className={`font-semibold leading-[130%] ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading