import { useAuth } from '../contexts/AuthProvider';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function CreatePostForm({ isOpen, handleClose }) {
  const { user } = useAuth();

  return (
    <div
      className={`${isOpen === true ? 'flex' : 'hidden'} absolute top-0 left-0 h-dvh w-full 
      bg-odinbook-light z-40 flex-col items-center`}
    >
      <div className='relative w-full flex justify-center items-center border-b border-odinbook-altDark'>
        <FontAwesomeIcon
          icon={faX}
          size='lg'
          className='absolute left-0 pl-1'
          onClick={handleClose}
        />
        <h1 className='py-2 text-lg text-center'>Create A Post</h1>
      </div>
      <div className='mt-9 h-12 px-4 w-full flex gap-x-4 items-center'>
        <img src={user.avatar} alt='User avatar' width={32} height={32} />
        {user.username}
      </div>
      <form className='flex flex-col gap-y-8 justify-center items-center'>
        <textarea
          name='postInput'
          id='postInput'
          cols='30'
          rows='10'
          className='p-4 border border-odinbook-altDark rounded-md'
        ></textarea>
        <Button
          text={'Post'}
          style={
            'w-20 h-8 text-odinbook-light bg-odinbook-altDark z-50 self-center rounded-md dark:bg-darkmode-altDark'
          }
        />
      </form>
    </div>
  );
}

export default CreatePostForm;
