import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
    const {auth,profile} = props;
    const links = auth.uid ? <SignedInLink profile={profile}/> : <SignedOutLink/>
  return (
   
      <nav className="nav-wrapper deep-purple darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            MY REACT PROJECT
          </Link>

         {links}
        </div>
      </nav>
  
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
