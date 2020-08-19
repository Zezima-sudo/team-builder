import React, { useState } from 'react';
import './App.css';

// Import Components

import Form from "./components/Form"
import Team from "./components/Team"

function App() {

  const [teamMember, setTeamMember] = useState([
    {
    id: '1',
    Name: 'Eric Rice',
    Email: 'email@email.com',
    Role: 'Front End Web Developer'
    }
])

const addTeamMember = member => {
  const newMember = {
    id: Date.now(),
    Name: member.name,
    Email: member.email,
    Role: member.role
  }
  setTeamMember([...teamMember, newMember])
}

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addTeamMember={addTeamMember} />
       <Team teamMember={teamMember} />
    </div>
  );
}

export default App;
