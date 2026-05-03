import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faUserCheck,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

function UserCard({ avatar, username, submitFriendRequest, status }) {
  return (
    <>
      <div className='my-4 p-2 flex justify-between shadow-[0px_0px_3px_0px] shadow-odinbook-altDark/40 rounded-md'>
        <div className='flex items-start text-lg gap-x-4'>
          <span className='self-center rounded-full'>{avatar}</span>
          <span>
            <p>{username}</p>
          </span>
        </div>
        <div className='mr-1 p-2 flex items-center text-odinbook-dark'>
          {status === undefined || 'undefined' ? (
            <span
              className='w-28 py-2 px-3 flex justify-between bg-odinbook-altLight rounded-2xl 
              shadow-[0_0_2px] shadow-odinbook-altDark'
            >
              <p>Add</p>
              <FontAwesomeIcon
                icon={faUserPlus}
                size='xl'
                className='text-odinbook-dark'
              />
            </span>
          ) : status === 'PENDING' ? (
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              size='xl'
              className='text-amber-500'
            />
          ) : (
            <FontAwesomeIcon
              icon={faUserCheck}
              size='xl'
              className='text-green-500'
              onClick={submitFriendRequest}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default UserCard;
