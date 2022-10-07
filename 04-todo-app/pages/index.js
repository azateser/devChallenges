import React from 'react'
import {useState} from 'react'
import Head from 'next/head'

import {FaRegTrashAlt} from 'react-icons/fa'

import classNames from 'classnames';

const Home = () => {

  const [active, setActive] = useState(0);

    
    const [todos, setTodos] = useState([
      {"id": 1, "text":"Do coding challenges", "completed": false},
      {"id": 2, "text":"Do coding challenges", "completed": false},
      {"id": 3, "text":"Do coding challenges", "completed": true},
    ]);

    const[filterActiveTab, setFilterActiveTab] = useState();

    const remove = id => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
    
    const allTab = () => {
      setActive(0);
      
    };
    
    const activeTab = () => {
      setActive(1);
      setFilterActiveTab(todos.filter(todo => todo.completed !== true))
    };
    
    const removeTab = () => {
      setActive(2);
    };
    

    const removeAll = id => {
      setTodos(todos.filter(todo => todo.id === id));
    };

    const toggleComplete = id => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };

  const [newTodo, setNewTodo] = useState({})

  const handleValue = (event) => {
    setNewTodo([{id: todos.length + 1, text: event.target.value, check: false}, ...todos ]);
  }

  const addNewTodo = () =>{
    setTodos(newTodo)
  }

  return (
    <React.Fragment>
    <Head> 
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap"></link>
    </Head>

    <div className='flex flex-col items-center justify-center w-full'>
      <div className='text-center mt-8 text-4xl font-bold w-full'>#todo</div>
     
      <div className='flex md:gap-24 md:max-w-xl max-w-xs gap-12 mt-12 text-sm border-b text-gray-800 border-gray-300 md:px-10'>
        <div onClick={allTab} className='flex flex-col items-center text-center w-20 cursor-pointer'>
          <div>All</div>
          <div className={classNames({
            'hidden': true,
            '!block w-12 h-1 bg-blue-500 rounded-t-md': active === 0
          })}></div>
        </div>
        <div onClick={activeTab} className='flex flex-col items-center text-center w-20 cursor-pointer'>
          <div>Active</div>
          <div className={classNames({
            'hidden': true,
            '!block w-16 h-1 bg-blue-500 rounded-t-md translation-all': active === 1
          })}></div>
        </div>
        <div onClick={removeTab} className='flex flex-col items-center text-center w-20 cursor-pointer'>
          <div>Completed</div>
          <div className={classNames({
            'hidden ': true,
            '!block w-24 h-1 bg-blue-500 rounded-t-md': active === 2
          })}></div>
        </div>
      </div>

      <div className='flex justify-center items-center  md:flex-row flex-col md:max-w-xl max-w-xs w-full gap-4 mt-4'>
        <div className='flex justify-center items-center md:w-3/4 w-full'>
          <input onChange={handleValue} type="text" className='w-full border border-[#BDBDBD] rounded-xl text-sm px-3 py-5 ' placeholder='add details'/>
        </div>
        <div className='flex justify-center items-center md:w-1/4 w-full'>
          <button onClick={addNewTodo} type="button" className='w-full bg-[#2F80ED] shadow-[0px_2px_6px_rgba(127,177,243,0.4)] rounded-xl text-white py-5 px-10'>Add</button>
        </div>
      </div>

      <div className='flex flex-col md:max-w-xl max-w-xs items-start justify-start w-full mt-6'>
        
        {(active === 0 || active ===  2 )
         &&
          todos.map(todo => (
          
            <div key={todo.text} className='flex items-center gap-2 mb-2 justify-between w-full'>
            <div className="flex gap-2 items-center">
            <input onClick={() => toggleComplete(todo.id)} defaultChecked={todo.completed ? true : false} name={todo.text} id={todo.id} type="checkbox" className='w-4 h-4 cursor-pointer' />
            <span className={classNames({
              'line-through opacity-75': todo.completed === true
            })}> {todo.text}</span>
            </div>

            {active === 2 && 
            <div onClick={() => remove(todo.id)} className=' cursor-pointer' >
             
           <FaRegTrashAlt className='fill-[#bdbdbd] hover:fill-red-400 transition-colors' />
            </div>}

            </div>
          ))
        }
        {
          active === 1 &&
          filterActiveTab.map(todo => (
            <div key={todo.text} className='flex items-center gap-2 mb-2 justify-between w-full'>
            <div className="flex gap-2 items-center">
            <input onClick={() => toggleComplete(todo.id)} defaultChecked={todo.completed ? true : false} name={todo.text} id={todo.id} type="checkbox" className='w-4 h-4 cursor-pointer' />
            <span className={classNames({
              'line-through opacity-75': todo.completed === true
            })}> {todo.text}</span>
            </div>
            </div>
          ))
        }
      {active === 2 &&
        <div className='flex justify-end w-full mt-4 text-sm cursor-pointer'>
          <button onClick={removeAll} className='flex items-center bg-[#EB5757] rounded-[4px] text-white px-4 py-2'>
          <div><FaRegTrashAlt className='mr-1 w-3' /></div>
          <div>delete all</div>
        </button>
        </div>}

      </div>
    </div>


    </React.Fragment>
  )
}

export default Home