export const reducer = (state,action)=>{
    if(action.type ==='ADD NAME'){
        console.log(action.details)
        return {...state,data:[action.details,...state?.data,]}
    }else if(action.type ==="EDIT_NAME"){
        console.log(action.id)
        return {...state, editId:action.id, isEdit:true}
    }else if(action.type === "EDIT_FALSE"){
        return {...state,  isEdit:true}
    }else if(action.type === "EDIT__COMPLETE"){
            return {...state, editId:"", isEdit:false,data:action.editDetail}
    } else{
        return
    }
    
   

}