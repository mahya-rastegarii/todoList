
import { IoMdDoneAll } from 'react-icons/io';
import { MdRemoveDone } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';


export default function Todo({todo, completeTodo, removeTodo}) {

  return (
    <>
    <div className={`relative flex  justify-between items-center shadow-lg border w-2/3 p-5  text-center text-xl font-bold rounded-md ${todo.bgColor}`}>
   
   {

   <p className={` break-words text-black w-full py-2 ${todo.Completed ? 'line-through opacity-50 ' : ''}`}>{todo.text}</p>

   }
    
    
      <div className='absolute top-1 right-1 rounded-tr-md bg-transparent flex justify-between items-center space-x-2'>
       
       {
       todo.Completed ? <MdRemoveDone className='text-green-700 hover:text-green-900 cursor-pointer opacity-60'  onClick={() => completeTodo(todo)}/>
       : <IoMdDoneAll className='text-green-700 hover:text-green-900 cursor-pointer' onClick={() => completeTodo(todo)}/>
       } 
        <VscClose className='text-red-700 hover:text-red-900 cursor-pointer'  onClick={() => removeTodo(todo.id)}/>
      </div>


  </div>
    </>
  )
}
