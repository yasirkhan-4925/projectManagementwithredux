import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from "react-router-dom"
import moment from 'moment'
import { auth } from "firebase";
import {deleteProject} from '../../store/reducers/actions/projectActions'

const MyProjects = (props) => {
    const {auth,projects} = props
    const userId = auth.uid
    const myProjects = projects && projects.filter((project)=>{
        return   userId==project.authorId  && project
    })
    
    const handleSubmit = (e)=> {
       
        props.deleteProject(e.target.id)
        
   }
    
    
    if(!auth.uid) return <Redirect  to="/signin"/>

    

   
  return (
    <>

<div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {myProjects && myProjects.map((project)=>{
                return (
                    <div key={project.id} >
                    <div key={project.id} className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                       <span className="card-title">
                          {project.title}
                       </span>
                 <p> posted by {project.authorFirstName}  {project.authorLastName}</p>
                       <p className="grey-text">
                          {moment(project.createdAt.toDate()).calendar()}
                       </p>
                    </div>
                    <button onClick={(e)=>handleSubmit(e)} id={project.id} style={{width:"100%",marginBottom:"4px"}}className="btn deep-purple darken-4 z-depth-0">
                 Delete Project
               </button>
                 </div>
                 
               </div>
                 
                 )
            })}
          </div>
          <div className="col s12 m5 offset-m1">
          
          </div>
        </div>
      </div>
    
     
    </>
  );
};

const mapStateToProps = (state) => {

    console.log(state)
    
  
    return {
      projects: state.firestore.ordered.projects
           
      ,
      auth:state.firebase.auth
    };
  };

 const mapDispatchToProps = (dispatch) => {
     return{
       deleteProject : (projectid) => dispatch(deleteProject(projectid))
     }
 } 
  export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
      {
        collection: "projects",
      },
    ])
  )(MyProjects);
