import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";

function Card({ postAuthor, postContent, likes, commentCount }) {
  return (
    <div className="p-2 w-full border-b border-odinbook-dark rounded-xs">
      <div>
        <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        <p>{postAuthor}</p>
      </div>
      <p>{postContent}</p>
      <div className="flex items-center">
        <span className="flex">
          <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          <p>{likes}</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} size="lg" />
          <p>{commentCount}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;
