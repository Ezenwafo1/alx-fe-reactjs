import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'darkblue', fontSize: '22px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ marginBottom: '8px' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
