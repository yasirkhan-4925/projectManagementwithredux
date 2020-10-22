
 const initState = {
    authError:null
 }

const authReducer = (state =initState,action) => {
    
   switch(action.type){
      case "LOGIN_ERROR":
         console.log("log in error")
      return{
         ...state,
         authError:"Log in failed"
      }   
      case "LOGIN_SUCCESS":
         console.log("log in success")
         return{
            ...state,
            authError:null
         }
       default:
         return state         
   }
   

}

export default authReducer