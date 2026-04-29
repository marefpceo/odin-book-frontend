function Button({ text, style, handleClick, isDisabled }) {
  return (
    <button className={style} onClick={handleClick} disabled={isDisabled}>
      {text}
    </button>
  );
}

export default Button;
