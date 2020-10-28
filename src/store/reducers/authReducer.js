
 const initState = {
    authError:null,
    authForSignUp:null
 }

const authReducer = (state =initState,action) => {
    
   switch(action.type){
      case "LOGIN_ERROR":
         console.log("log in error")
      return{
         ...state,
         authError:"incorrect log in information or sign up"
      }   
      case "LOGIN_SUCCESS":
         console.log("log in success")
         return{
            ...state,
            authError:null
         }
       case "SIGNOUT_SUCCESS":
          console.log("signout")
          return state;
        case "SIGN_UP SUCCESS":
           console.log("signup success")
           return {
              ...state,
              authError:null
           }    
         case "SIGNUP_ERROR":
         console.log("sign up error")
         return{
            ...state,
            authError:action.err.message,
            
         }  
       default:
         return state         
   }
   

}

export default authReducer