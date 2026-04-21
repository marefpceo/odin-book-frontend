import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function FileUploadButton({ customStyle }) {
  const fileInputRef = useRef(null);

  function handleClick() {
    fileInputRef.current.click();
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
        name='avatarUpload'
        id='avatarUpload'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => console.log(e.target.files[0])}
      />
    </>
  );
}

export default FileUploadButton;
