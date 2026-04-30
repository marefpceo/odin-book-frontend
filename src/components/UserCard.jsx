import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faUserCheck,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

function UserCard({ key, avatar, username, submitFriendRequest, status }) {
  return (
    <>
      <div className='p-2 flex justify-between shadow-[0px_0px_3px_0px] shadow-odinbook-altDark/40 rounded-md'>
        <div className='flex items-start text-lg gap-x-4'>
          <span>{avatar} </span>
          <span>
            <p>{username}</p>
          </span>
        </div>
        <div className='p-2 flex items-center'>
          <FontAwesomeIcon
            icon={faUserPlus}
            size='xl'
            className='text-odinbook-dark'
          />
          <FontAwesomeIcon
            icon={faUserCheck}
            size='xl'
            className='text-green-500'
            onClick={submitFriendRequest}
          />
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size='xl'
            className='text-amber-500'
          />
        </div>
      </div>
    </>
  );
}

export default UserCard;
