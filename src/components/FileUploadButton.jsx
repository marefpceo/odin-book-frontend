import { useRef } from 'react';
import { updateProfile } from '../api/apiProfileServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function FileUploadButton({ customStyle, profileId, setAvatarUrl }) {
  const fileInputRef = useRef(null);

  function handleClick() {
    fileInputRef.current.click();
  }

  // Handles file change and auto uploads the file
  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const response = await updateProfile(profileId, formData);

      const responseData = await response.json();
      setAvatarUrl(responseData.updatedProfile.avatar);
    } catch (error) {
      console.error('Upload Error', error);
    }
  }

  return (
    <>
      <button type='button' onClick={handleClick} className={customStyle}>
        <FontAwesomeIcon
          icon={faCamera}
          size='md'
          className='text-odinbook-dark'
        />
      </button>

      <input
        type='file'
        name='avatar'
        id='avatar'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept='image/*'
      />
    </>
  );
}

export default FileUploadButton;
