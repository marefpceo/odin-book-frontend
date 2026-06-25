function CommentModal({ isOpen, close }) {
  return (
    <div className={`${isOpen === true ? 'flex' : 'hidden'} z-50`}>
      Comments
    </div>
  );
}

export default CommentModal;
