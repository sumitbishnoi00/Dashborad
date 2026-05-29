import React from 'react'

const Button = ({icon, btn, vari}) => {

    const variants = {
        pri: className="bg-blue text-white",
        sec: className="bg-transparent text-black-body",
        dan: className="bg-transparent text-red-other hover:bg-red-other"
    }
  return (
    <button className={`flex items-center gap-3 w-full px-4 py-3 rounded-[99px] border border-transparent font-medium text-[16px] leading-[160%] transition-all duration-500 cursor-pointer ${variants[vari]} `}>
        <img src={icon} alt="tab-icon" className='w-7.5 h-7.5' />
        {btn}
    </button>
  )
}

export default Button