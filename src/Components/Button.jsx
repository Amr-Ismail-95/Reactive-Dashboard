import React from 'react'

const Button = ({bgColor, color, customFunc, size, text, borderRadius, btnWidth}) => {
  return (
    <div>
      <button 
      type='button' 
      onClick={customFunc}
      style={{
        width: btnWidth,
        backgroundColor: bgColor,
        color,
        borderRadius,
      }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
        {text}
      </button>
    </div>
  )
}

export default Button