export const createProject = (project) => {
     
 return (dispatch,getState,{getFiresbase,getFirestore}) => {
    
    const firestore = getFirestore()
    firestore.collection('projects').add({
         ...project,
         authorFirstName:"yasir Khan",
         authorLastName:"Muahmmad",
         authorId:12234,
         createdAt:new Date()


    }).then(()=>{
      dispatch({ 
         type:"CREATE_PROJECT",
         project
    
               
    })
    }).catch((err)=>{
         dispatch({type:"CREATE_PROJECT_ERROR"},err)
    })
    
     

 }

 

}