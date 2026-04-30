import UserCard from '../components/UserCard';
import Avvvatar from 'avvvatars-react';

function Users() {
  return (
    <section className='p-2'>
      <h1>Users</h1>
      <div className='mt-8'>
        <UserCard
          avatar={<Avvvatar value='Test@test.com' size={64} />}
          username={'Test User'}
        />
      </div>
    </section>
  );
}

export default Users;
