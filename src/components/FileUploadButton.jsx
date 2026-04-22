import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function FileUploadButton({ customStyle, handleChange }) {
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
        name='avatar'
        id='avatar'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleChange}
        accept='image/*'
      />
    </>
  );
}

export default FileUploadButton;
