export const createProject = (project) => {
     
 return (dispatch,getState) => {
    
    // some asynchronous calls
    
     dispatch({ 
         type:"CREATE_PROJECT",
         project:project
    
               
    })

 }

 

}