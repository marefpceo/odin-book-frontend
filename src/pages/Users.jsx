import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import ResponseModal from '../components/ResponseModal';
import { useAuth } from '../contexts/AuthProvider';
import { getUsers, requestFriend } from '../api/apiUserServices';
import Avvvatar from 'avvvatars-react';

function Users() {
  const { user } = useAuth();
  const [usersList, setUsersList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function getUserListService() {
      const response = await getUsers();

      const responseData = await response.json();

      if (response.status === 200) {
        setUsersList(responseData.filter((obj) => obj.id !== user.id));
      }
    }
    getUserListService();
  }, []);

  async function submitFriendRequest(e) {
    const requestId = e.currentTarget.dataset.id;
    const response = await requestFriend(user.id, requestId);

    const responseData = await response.json();

    if (response.status === 200) {
      console.log(responseData.friendRequest);
    }
  }

  // Updates friendship status
  async function updateFriendStatus() {
    //TODO Complete API call for friend status update
  }

  function processStatus(user1Input, user2Input) {
    const statusObj = {};
    if (user1Input.length > 0) {
      statusObj.status = user1Input[0].status;
      statusObj.isUser1 = true;
      return statusObj;
    }
    if (user2Input.length > 0) {
      statusObj.status = user2Input[0].status;
      statusObj.isUser1 = false;
      return statusObj;
    }
  }

  function handleResponseClick() {
    console.log('Click');
  }

  // Opens ResponseModal
  function openResponseModal() {
    if (isOpen === true) {
      return;
    } else {
      setIsOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  }

  // Closes ResponseModal
  function closeResponseModal() {
    if (isOpen === false) {
      return;
    } else {
      setIsOpen(false);
      document.body.classList.remove('overflow-hidden');
    }
  }

  return (
    <section className='p-2'>
      <ResponseModal
        isOpen={isOpen}
        handleClose={closeResponseModal}
        handleClick={handleResponseClick}
      />
      <h1>Users</h1>
      <div className='mt-8'>
        {usersList.map((obj) => (
          <UserCard
            key={obj.id}
            avatar={
              obj.profile.avatar === 'NULL' || null ? (
                <Avvvatar value={obj.email} size={64} />
              ) : (
                <img
                  src={obj.profile.avatar}
                  alt={`${obj.profile}'s avatar`}
                  width={64}
                  height={64}
                />
              )
            }
            username={obj.username}
            id={obj.id}
            handleClick={submitFriendRequest}
            openResponseModal={openResponseModal}
            status={processStatus(obj.user1, obj.user2)}
          />
        ))}
      </div>
    </section>
  );
}

export default Users;
