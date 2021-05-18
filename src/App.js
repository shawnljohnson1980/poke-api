import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/pokeapi.jsx'
import Results from './components/results.jsx'
import React, { useState } from 'react'
import { Router } from '@reach/router';
function App() {
  const [myName, setMyName] = useState("");
  const findPoke = form => {
    setMyName(form.Name);
  }
  return (
    <div className="App " >
      <h1>Welcome to the show</h1>
      <div className="container-fluid mt-5 ">

        <Router>
          <Form pullPoke={findPoke} path="/" />
          <Results path="/results" name={myName} />
        </Router>
      </div>
    </div>
  );
}

export default App;
