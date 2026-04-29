import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import Card from '../components/Card';
import { useAuth } from '../contexts/AuthProvider';
import { getPosts } from '../api/apiPostServices';

import Avvvatars from 'avvvatars-react';

function Home() {
  const { user } = useAuth();
  const { refreshPosts } = useOutletContext();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function getPostsService() {
      const response = await getPosts(user.id);

      const responseData = await response.json();
      if (response.status === 200) {
        setPostList(responseData.feedPosts);
      } else {
        return;
      }
    }
    getPostsService();
  }, [user, refreshPosts]);

  return (
    <section role='main' className='home'>
      {postList.map((card) => (
        <Card
          key={card.id}
          postAuthor={card.user.username}
          postContent={card.content}
          likes={card._count.likes}
          commentCount={card.comment.length}
          email={card.user.email}
          avatar={card.user.profile.avatar}
        />
      ))}
    </section>
  );
}

export default Home;
