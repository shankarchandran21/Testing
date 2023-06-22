import React from 'react'
import { useGlobalContext } from './context/Context'
import { useNavigate } from 'react-router-dom'


function List() {
    const navigate = useNavigate()
    const {data,dispatch}=useGlobalContext()

    const HandleClick=(id)=>{
        dispatch({type:"EDIT_NAME",id})
        navigate('/')
    }



  return (
    <div>
        {data.map((item)=>{
          return<div>
              <h1>{item.firstName + item.lastName}</h1>
                <button onClick={()=>HandleClick(item.id)}>\Edit</button>
          </div>
        })}
    </div>
  )
}

export default List