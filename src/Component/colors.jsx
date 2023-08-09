import React from 'react'

export default function Colors({colorName, setBgColorInput}) {
  
  const bgColorInputHandler = (color) => {
      setBgColorInput(color)
  }
  return (
   
    <span className={`w-6 h-6 rounded-full ${colorName} border shadow-sm hover:bg-opacity-90 cursor-pointer transition-all`} onClick={() => bgColorInputHandler(colorName)}></span>
      
      
      
  )
}
