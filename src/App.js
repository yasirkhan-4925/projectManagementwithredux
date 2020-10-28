import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/Dashboard'
import ProjectDetails from './Components/projects/ProjectDetails'
import SignIn from './Components/auth/SingIn'
import SignUp from './Components/auth/SignUp'
import CreateProject from './Components/projects/CreateProject'
import MyProjects from './Components/projects/MyProjects'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/myprojects" component={MyProjects} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
