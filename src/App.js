
import { useState } from 'react';
import './App.css';
import { useGlobalContext } from './context/Context';

import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function App() {
  const {dispatch,isEdit,editId,data}= useGlobalContext()

  const [detail,setDetail]= useState({firstName:"",lastName:""});
  const [edit,setEdit]= useState(isEdit)
  const navigate = useNavigate()

  const HandleChange =(e)=>{
    const name =e.target.name;
    const value =e.target.value;
    setDetail({...detail,[name]:value}); 
  }
  if( edit){
    const findId = data.find(({id})=>id === editId);
    console.log(findId)
    setEdit(false)
    setDetail({...detail,firstName:findId.firstName,lastName:findId.lastName})
    console.log(isEdit)
    
  }
  const HandleClick=(e)=>{
    e.preventDefault()
    if(detail.firstName.trim()&&detail.lastName.trim()&&!isEdit){
      console.log('MQMAMMA')
      let details={...detail,id:uuidv4()}
      dispatch({type:"ADD NAME",details});
      setDetail({...detail,firstName:"",lastName:""});
      navigate('/list')

    }else if(isEdit && editId && detail.firstName.trim()&&detail.lastName.trim()){
      console.log("ENTER")
        let editDetail = data.map((item)=>{
            if(item.id === editId){
              return {...item,firstName:detail.firstName,lastName:detail.lastName}
            }else{
              return item;
            }

        })
          console.log(editDetail)
        dispatch({type:"EDIT__COMPLETE",editDetail})
      setDetail({...detail,firstName:"",lastName:""});

        navigate('/list')
    }else{
      console.log("HIII")
    }
    console.log("FUnction")

  }











  return (
    <div className="App">
        <input name='firstName' placeholder='FirstName' value={detail.firstName} onChange={HandleChange}/>
        <input name='lastName' placeholder='lastName' value={detail.lastName} onChange={HandleChange}/>
       <button onClick={HandleClick}>
          SUMBIT
        </button>
    </div>
  );
}

export default App;
