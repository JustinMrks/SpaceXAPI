import React from 'react';

const MissionsList = (props) => {
  return (
    <div>
      {props.error ? (
        <div>oops</div>
      ) : (
        props.missions.map((m) => (
          <div>
            <p>{m.mission_name}</p>
            <p>{m.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MissionsList;
