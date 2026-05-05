import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { useAuth } from '../contexts/AuthProvider';
import { getUsers, requestFriend } from '../api/apiUserServices';
import Avvvatar from 'avvvatars-react';

function Users() {
  const { user } = useAuth();
  const [usersList, setUsersList] = useState([]);

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

  function processStatus(user1Input, user2Input) {
    if (user2Input.length > 0) {
      console.log(user2Input);
      return user2Input[0].status;
    }
    if (user1Input.length > 0) {
      return user1Input[0].status;
    }
  }

  return (
    <section className='p-2'>
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
            status={processStatus(obj.user1, obj.user2)}
          />
        ))}
      </div>
    </section>
  );
}

export default Users;
