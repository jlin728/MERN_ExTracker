import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/exercises-list.component";
import EditExcercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br />
          <Route path="/" exact component={ExcerciseList} />
          <Route path="/edit/:id" exact component={EditExcercise} />
          <Route path="/create" exact component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
