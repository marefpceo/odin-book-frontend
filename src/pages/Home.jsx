import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../contexts/AuthProvider";
import { getPosts } from "../api/apiPostServices";

function Home() {
  const { user } = useAuth();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function getPostsService() {
      const response = await getPosts(user.id);

      const responseData = await response.json();
      if (response.status === 200) {
        setPostList(responseData.feedPosts);
        console.log(postList);
      } else {
        return;
      }
    }
    getPostsService();
  }, [user]);

  return (
    <section role="main" className="home">
      {postList.map((card) => (
        <Card
          key={card.id}
          postAuthor={card.user.username}
          postContent={card.content}
          likes={card._count.likes}
          commentCount={card.comment.length}
        />
      ))}
    </section>
  );
}

export default Home;
