import React from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/reducers/actions/authAction'

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName:"",
    lastName:""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
    
  };
  render() {

    const {auth,authError} = this.props
    if(auth.uid)  return <Redirect to="/"/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              value={this.state.firstName}
              type="text"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={this.state.lastName}
              type="text"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn deep-purple darken-4 z-depth-0">
              Sign Up
            </button>
            <div className="red-text center">
    {authError ? <p>{authError}</p>:null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
