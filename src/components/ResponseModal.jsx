import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ResponseModal({ isOpen, handleClose, handleClick }) {
  // Prevents child div from triggering parent click event when applied
  function preventClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={`${isOpen === true ? 'flex' : 'hidden'} absolute top-0 left-0 h-dvh w-full 
      justify-center items-center bg-odinbook-dark/40`}
      onClick={handleClose}
    >
      <div
        className='relative w-10/12 h-40 p-2 drop-shadow-sm drop-shadow-odinbook-dark rounded-2xl 
      bg-odinbook-altLight flex flex-col gap-y-3 items-center justify-evenly'
        onClick={preventClick}
      >
        <FontAwesomeIcon
          icon={faXmark}
          size='lg'
          className='absolute top-1 left-0 p-2'
          onClick={handleClose}
        />
        <p className='mt-4'>Accept User's request?</p>
        <div className='flex gap-x-4'>
          <Button
            text='Accept'
            style={
              'w-20 h-7 bg-emerald-500 text-white rounded-md shadow shadow-odinbook-altDark'
            }
            handleClick={handleClick}
          />
          <Button
            text='Decline'
            style={
              'w-20 bg-rose-500 text-white rounded-md shadow shadow-odinbook-altDark'
            }
            handleClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
}

export default ResponseModal;
