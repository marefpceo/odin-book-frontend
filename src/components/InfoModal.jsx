function InfoModal({ isOpen, close, message }) {
  return (
    <div
      className={`${isOpen === false ? 'hidden' : 'flex'} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 min-h-24 
      bg-odinbook-light z-50 rounded-md border-2 border-red-600/60 flex-col justify-center items-center`}
    >
      <p>{message}</p>
    </div>
  );
}

export default InfoModal;
