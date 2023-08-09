import React from 'react';
import {MdOutlineDone, MdOutlineClear} from 'react-icons/md'
import { ClipLoader } from 'react-spinners';


export default function Input({value, setValue, inputRef, insertTodo, bgColor, clearInput,loading}) {
  
  
  
  return (
    <div className="w-full py-2 md:p-4 mr-2 flex justify-start items-center space-x-1">
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className={` border border-gray-300 opacity-80 focus:border-gray-500 rounded-sm w-3/4 ${bgColor} p-2 outline-none placeholder:text-gray-500 placeholder:font-semibold focus:placeholder:opacity-50 transition-all`} placeholder='type here ...'  ref={inputRef}/>
      <div  className=" border bg-green-500 rounded-md hover:bg-green-600 transition-all ">
       {
        loading ? <div className='bg-green-300 opacity-40 p-3 flex justify-center items-center'><ClipLoader  color='#2d3332' loading={loading} size={21}/></div> 

        : <button title='Add' className='p-3 text-xl '  onClick={insertTodo} ><MdOutlineDone className=''/></button>
       }

      </div>
      <div className=" bg-red-500 border rounded-md hover:bg-red-600 transition-all">

      <button title='Clear' className=' p-3 text-xl' onClick={clearInput}><MdOutlineClear/></button>

      </div>
    </div>
  )
}
