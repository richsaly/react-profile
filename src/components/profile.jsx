
import React, { } from 'react';

const Profile = ({ users }) => {

  return (
    <div className='prof'>
      {users.map((user, index) => (
        <div key={index}>
            <img src={user.image} alt='saly'/>
          <div className='details'>
             <h2>{user.userName}</h2>
            <p><span>Bio:</span> {user.userBio}</p>
            <p><span>Date of Birth:</span> {user.userDateOfBirth}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;

