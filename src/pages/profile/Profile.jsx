import React from 'react';
import './Profile.css';
import { useParams } from 'react-router-dom';

function Profile() {
  const { username } = useParams();

  return (
    <div className='profile'>Profile: { username }</div>
  )
}

export default Profile;