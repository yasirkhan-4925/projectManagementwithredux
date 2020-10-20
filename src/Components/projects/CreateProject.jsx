import React from "react";
import {connect} from 'react-redux'
import {createProject} from '../../store/reducers/actions/projectActions'


class CreateProject extends React.Component {
  state = {
    title:"",
    content:"" 
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  
    this.props.createProject(this.state)
    this.props.history.push("/")
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              value={this.state.title}
              type="text"
              id="title"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea  className="materialize-textarea" onChange={this.handleChange} id="content" ></textarea>
          </div>
         
          <div className="input-field">
            <button className="btn deep-purple darken-4 z-depth-0">
              Add Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      createProject: (project) =>  dispatch(createProject(project))
    }
}


export default connect(null,mapDispatchToProps)(CreateProject);
