import React from "react";
import {connect} from 'react-redux'
import {signIn} from '../../store/reducers/actions/authAction'

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  };
  render() {

     const {authError} = this.props
     
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <button className="btn deep-purple darken-4 z-depth-0">
              Log In
            </button>
            <div className="red-text center">
              {authError ? <p>please enter correct email or password or signUp</p> :null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
     authError:state.auth.authError
  }

}

const mapDispatchToProps = (dispatch) => { 
   return {
     signIn: (cred) => dispatch(signIn(cred))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
