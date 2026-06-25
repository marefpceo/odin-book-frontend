import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function CommentModal({ isOpen, close, comments }) {
  return (
    <div
      className={`${isOpen === true ? 'flex' : 'hidden'} absolute flex-col h-dvh w-full top-0 z-50 p-2 bg-odinbook-light`}
    >
      <FontAwesomeIcon
        icon={faX}
        size='lg'
        className='absolute right-0 m-2 p-2'
        onClick={close}
      />
      <div className='flex flex-1 mt-12 border-t border-odinbook-altDark'>
        {!comments ? (
          <span className='w-full flex flex-col justify-center items-center'>
            <p>No comments yet</p>
          </span>
        ) : (
          comments
        )}
      </div>
      <div className='mb-2 w-full flex flex-col items-center'>
        <input
          type='text'
          name='commentInput'
          id='commentInput'
          placeholder='Write a comment'
          className='peer w-full h-12 resize-none placeholder-odinbook-altDark'
        />
        <span className='hidden m-2 p-2 peer-focus:block self-end bg-odinbook-altDark/25 rounded-full'>
          <FontAwesomeIcon icon={faPaperPlane} size='md' />
        </span>
      </div>
    </div>
  );
}

export default CommentModal;
