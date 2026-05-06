import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faUserCheck,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

function UserCard({
  avatar,
  username,
  id,
  handleClick,
  openResponseModal,
  status,
}) {
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
          {status && status.status === 'ACTIVE' ? (
            <FontAwesomeIcon
              icon={faUserCheck}
              size='xl'
              className='text-green-500'
            />
          ) : status === 'PENDING' ? (
            <span
              className='w-20 py-1 flex flex-col items-center bg-yellow-100 text-yellow-800 
                rounded-2xl text-sm'
              onClick={openResponseModal}
            >
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                size='1x'
                className='text-amber-800'
                onClick={handleResponseClick}
              />
              <p
                className={`${status.isUser1 === true ? 'animate-pulse' : ''}`}
              >
                {status.isUser1 === true ? 'Pending' : 'Submitted'}
              </p>
            </span>
          ) : (
            <span
              data-id={id}
              className='w-20 py-2 px-3 flex justify-between bg-odinbook-altLight rounded-2xl 
              shadow-[0_0_2px] shadow-odinbook-altDark text-sm'
              onClick={handleClick}
            >
              <p>Add</p>
              <FontAwesomeIcon
                icon={faUserPlus}
                size='xl'
                className='text-odinbook-dark'
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default UserCard;
