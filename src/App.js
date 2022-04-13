import React, { useState } from 'react';
import MissionForm from './Components/MissionForm';
import MissionsList from './Components/MissionsList';
import axios from 'axios';

function App() {
  const [error, setError] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [missionsList, setMissionsList] = useState([]);
  const getMissions = () => {
    setIsFetchingData(true);
    axios
      .get('https://api.spacexdata.com/v3/missions')
      .then((res) => {
        setMissionsList(res.data);
        setIsFetchingData(false);
      })
      .catch((err) => {
        setError(err);
        setIsFetchingData(false);
      });
  };

  return (
    <div>
      <h1>Space X Missions</h1>
      <MissionForm getData={getMissions} fetching={isFetchingData} />
      <MissionsList missions={missionsList} error={error} />
    </div>
  );
}

export default App;
