import Card from "../components/Card";

import cards from "../../cardObjects"; // Remove after

function Home() {
  return (
    <section role="main" className="home">
      {cards.map((card) => (
        <Card
          key={card.id}
          postAuthor={card.author}
          postContent={card.content}
          likes={card.likes}
          commentCount={card.comments}
        />
      ))}
    </section>
  );
}

export default Home;
