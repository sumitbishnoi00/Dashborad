import React from 'react'

const Button = ({icon, btn, vari, onClick}) => {

    const variants = {
        pri: "bg-blue text-white",
        sec: "bg-transparent text-black-body dark:text-white hover:border-black-body dark:hover:border-white",
        dan: "bg-transparent text-red-other hover:border-red-other"
    }
  return (
    <button onClick={onClick} className={`flex items-center gap-3 w-full px-4 py-3 rounded-[99px] border border-transparent font-medium text-[16px] leading-[160%] whitespace-nowrap transition-all duration-500 cursor-pointer ${variants[vari]} `}>
        <img src={icon} alt="tab-icon" className='w-7.5 h-7.5 shrink-0' />

        {btn}
    </button>
  )
}

export default Button