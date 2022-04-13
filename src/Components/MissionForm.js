import React from 'react';

const MissionForm = (props) => {
  return (
    <div>
      {props.fetching ? (
        <p>nope</p>
      ) : (
        <button onClick={props.getData}>Get New Missions List</button>
      )}
    </div>
  );
};

export default MissionForm;
