import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";

function Card({ postAuthor, postContent, likes, commentCount }) {
  return (
    <div className="p-2 w-full border-b border-odinbook-dark rounded-xs dark:border-darkmode-altDark">
      <div>
        <Link to={"#selectedProfile"} className="flex gap-x-3 items-center">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          <p className="font-bold">{postAuthor}</p>
        </Link>
      </div>
      <div className="py-4">
        <p>{postContent}</p>
      </div>
      <div className="flex items-center gap-x-4">
        <span className="flex">
          <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          <p>{likes}</p>
        </span>
        <span className="flex">
          <FontAwesomeIcon icon={faComment} size="lg" />
          <p>{commentCount}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;
