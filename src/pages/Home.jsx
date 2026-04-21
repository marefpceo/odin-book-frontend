import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuth } from "../contexts/AuthProvider";
import { getPosts } from "../api/apiPostServices";

import Avvvatars from "avvvatars-react";

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

  function processAvatar(avatarInput, emailInput) {
    if (avatarInput !== "NULL" || null) {
      return;
    } else {
      // use emailInput to create a default avatar return
      return <Avvvatars value={emailInput} shadow={true} />;
    }
  }

  return (
    <section role="main" className="home">
      {postList.map((card) => (
        <Card
          key={card.id}
          postAuthor={card.user.username}
          postContent={card.content}
          likes={card._count.likes}
          commentCount={card.comment.length}
          avatar={processAvatar(card.user.profile.avatar, card.user.email)}
        />
      ))}
    </section>
  );
}

export default Home;
