import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';

function UserCard({ avatar, username }) {
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
            icon={faUserMinus}
            size='xl'
            className='text-red-600'
          />
        </div>
      </div>
    </>
  );
}

export default UserCard;
