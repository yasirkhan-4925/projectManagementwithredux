
const initState = {
    projects: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
  }

 const projectReducer = (state =initState,action) => {


   switch(action.type){
     case "CREATE_PROJECT":
      console.log("created project" , action.project)
      return state;
     case "CREATE_PROJECT_ERROR":
       console.log("Create project error",action.err)
       return state;
      case "DELETE_PROJECT":
        console.log("project deleted")
        return state;
      case "DELETE_PROJECTERROR":
        console.log("error in deleteing post")
        return state;   
      default:  
      return state
   }
 
   
 
 }

 export default projectReducer