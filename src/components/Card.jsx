import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons';

import Avvvatars from 'avvvatars-react';

function Card({
  postId,
  postAuthor,
  postContent,
  likes,
  commentCount,
  email,
  avatar,
  handleLikeClick,
  handleCommentClick,
}) {
  return (
    <div className='p-2 w-full border-b border-odinbook-dark rounded-xs dark:border-darkmode-altDark'>
      <div>
        <Link to={'#selectedProfile'} className='flex gap-x-3 items-center'>
          {avatar !== ('NULL' || null) ? (
            <img src={avatar} alt='User avatar' width={35} height={35} />
          ) : (
            <Avvvatars value={email} shadow={true} size={35} />
          )}
          <p className='font-bold'>{postAuthor}</p>
        </Link>
      </div>
      <div className='py-4'>
        <p>{postContent}</p>
      </div>
      <div className='flex items-center gap-x-4'>
        <span className='flex' onClick={handleLikeClick} data-id={postId}>
          <FontAwesomeIcon icon={faThumbsUp} size='lg' />
          <p>{likes === 0 ? '' : likes}</p>
        </span>
        <span className='flex' onClick={handleCommentClick} data-id={postId}>
          <FontAwesomeIcon icon={faComment} size='lg' />
          <p>{commentCount === 0 ? '' : commentCount}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;
