import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

import theme from '../theme';
import Colors from './colors';
import Header from './header';
import Input from './input';
import Todo from './todo';



export default function TodoList() {


  const url = "https://jserver-todolist.iran.liara.run/todos/"
  const defaultTheme = theme[0] ;
  
  const [inputValue, setInputValue] = useState('')
  const [inputColor, setInputColor] = useState(defaultTheme)
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  
  const focusInput = useRef(null);


  useEffect(() => {
    focusInput.current.focus();
    try {
      setIsLoading(true);
      fetchData();
      setIsLoading(false);

    } catch (error) {
      toast.error("there is a problem loading the Todos, please refresh the page once")
    }
      
  },[])


  const fetchData = async() => {
    const todoList = await axios.get(url)
    setTodos(todoList.data);
  }

  const clearInput = (e) => {
    e.preventDefault();
    setInputValue('');
    setInputColor(defaultTheme)
    
  }
  
  const insertTodo = async(e) => {
    e.preventDefault();
    
    if(!inputValue){return }
    setIsLoading(true);
    await axios.post(url, {
      text: inputValue ,
      Completed: false,
      bgColor: inputColor,
    })
     fetchData();
     setIsLoading(false);
      setInputValue('');
      setInputColor(defaultTheme);
    focusInput.current.focus()

  }

  const completeTodo = async(todo) => {
    try {
      
      await axios({
       method: 'put',
       url : `${url}${todo.id}`,
       headers:
       {'Content-Type': 'application/json'},
       data:{
         ...todo,
         Completed: !todo.Completed
       }
      })
      fetchData();
      toast.success("completed")

    } catch (error) {

      toast.error(" there is a problem")


    }
  }

  const removeTodo = async(todoId) => {
   try {

     await axios.delete(url + todoId )
     fetchData();
     toast.success("Todo was successfully deleted ")
    
   } catch (error) {
    toast.error("failed to delete Todo")
   }
   
  }


  return (
   <div className=' p-1 lg:p-5 md:p-3'>
   
   <div><Toaster position="top-right" reverseOrder={false}/></div>
     
      
    <Header/>
        <form onSubmit={insertTodo} className='flex flex-col justify-center items-center'>
            <div className='container flex justify-between items-center lg:w-2/4'>
              <Input value={inputValue} setValue={setInputValue} bgColor={inputColor} insertTodo={insertTodo} clearInput={clearInput} inputRef={focusInput} loading={isLoading}/>
              <div className="">

                 <select name="todos" className='outline-none p-3 border border-gray-300 rounded-sm' onChange={(e) => setStatus(e.target.value)}>
                    <option value="all" className=''>All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                  </select>
              </div>
             </div>
             
        </form>
        <div className='flex justify-center items-center md:-mt-2'>
          <div className='flex justify-center md:justify-start items-center space-x-2 w-full md:w-4/5 lg:w-2/4 lg:ml-7 '>

              {
                 theme.map(color => (

                 <Colors key={color} colorName={color} setBgColorInput={setInputColor}/>

                 ))
              }

          </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-2  my-10'>

        <hr className='w-full lg:w-2/3'/>

        </div>

       <div className='flex justify-center items-center'>

      
       
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center">
          
          {
          

                status === "completed" && todos.filter(todo => todo.Completed).map(todo => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
                ))

          }
          {

                   status === "uncompleted" && todos.filter(todo => !todo.Completed).map(todo => (
                  <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
                  )) 
          }
          {

                  status === "all" && todos.map(todo => (
                  <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
                  ))
          }

               
              
        </div>
         
        </div>

       
   </div>
   
  )
}
