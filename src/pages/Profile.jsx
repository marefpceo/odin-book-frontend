import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { getProfile, updateProfile } from '../api/apiProfileServices';
import Button from '../components/Button';

import Avvvatars from 'avvvatars-react';

function Profile() {
  const { user } = useAuth();
  const [profileInfo, setProfileInfo] = useState('');
  const [bio, setBio] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    async function getProfileService() {
      const response = await getProfile(user.profile);

      const responseData = await response.json();
      if (response.status === 200) {
        setProfileInfo(responseData);
        setBio(responseData.bio);
      }
    }
    getProfileService();
  }, [user]);

  async function updateProfileService() {
    const response = await updateProfile(user.profile, bio);

    const responseData = await response.json();
    if (response.status === 200) {
      console.log('Profile updated');
    }
  }

  // Handles click and conditionally submit changes if bio has been updated.
  function handleClick() {
    if (isEditMode === false) {
      setIsEditMode(true);
    }

    if (isEditMode === true) {
      updateProfileService();
      console.log('Update profile');
      setIsEditMode(false);
    }
  }

  function handleChange(e) {
    setBio(e.target.value);
  }

  return (
    <section className='p-2'>
      <div className='pt-6 flex flex-col justify-center items-center gap-y-8'>
        <Avvvatars value={user.email} size={75} />
        <h1>
          {profileInfo.firstname} {profileInfo.lastname}'s Profile
        </h1>
      </div>
      <div className='mt-24'>
        <span className='flex justify-between items-center'>
          <h2>Bio</h2>
          <Button
            text={!isEditMode ? 'Edit Bio' : 'Save'}
            style={`w-20 h-8 text-odinbook-light bg-odinbook-dark z-50 self-center rounded-md 
              dark:bg-darkmode-altDark ${user.id !== profileInfo.id ? 'hidden' : ''}`}
            handleClick={handleClick}
          />
        </span>
        {isEditMode === false ? (
          <p className='mt-4 indent-5'>{bio}</p>
        ) : (
          <textarea
            name='bio'
            id='bio'
            value={bio}
            rows={5}
            className='mt-4 w-full p-2 rounded 
              border border-odinbook-altDark'
            onChange={handleChange}
          ></textarea>
        )}
      </div>
    </section>
  );
}

export default Profile;
