import React from 'react';
import { TeamList } from './features/team/teamList'; 
import { Team } from './features/team/team'; 
import { Rotation } from './features/rotation/rotation'
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="flex flex-col">
      <header className='flex flex-row justify-center bg-blue-900'>
        <img className="max-h-24 p-2" src="./nba-logo-transparent.png" alt="NBA" />
      </header>
      <section>

        <Routes>
          <Route path="/game/:gameId/:teamId" element={<Rotation/>}/> 
          <Route path="/team/:teamId" element={<Team/>}/>
          <Route path="/" element={<TeamList/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
 