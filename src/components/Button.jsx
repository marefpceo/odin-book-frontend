function Button({ text, style, handleClick }) {
  return (
    <button className={style} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
