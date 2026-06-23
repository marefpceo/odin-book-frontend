import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import Card from '../components/Card';
import { useAuth } from '../contexts/AuthProvider';
import { getPosts, createLikeRecord } from '../api/apiPostServices';

import Avvvatars from 'avvvatars-react';

function Home() {
  const { user } = useAuth();
  const { refreshPosts, setRefreshPosts } = useOutletContext();
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

  async function createLikeRecordService(postId) {
    const response = await createLikeRecord(user.id, postId);
    const responseData = await response.json();
    if (response.status === 200) {
      setRefreshPosts(true);
    }
  }

  // Gets post id and call function to create a like record
  function handleLikeClick(e) {
    const postId = e.currentTarget.dataset.id;
    createLikeRecordService(postId);
    console.log('like click' + postId);
  }

  function handleCommentClick(e) {
    console.log('comment click');
  }

  return (
    <section role='main' className='home'>
      {postList.map((post) => (
        <Card
          key={post.id}
          postId={post.id}
          postAuthor={post.user.username}
          postContent={post.content}
          likes={post._count.likes}
          commentCount={post.comment.length}
          email={post.user.email}
          avatar={post.user.profile.avatar}
          handleLikeClick={handleLikeClick}
          handleCommentClick={handleCommentClick}
        />
      ))}
    </section>
  );
}

export default Home;
