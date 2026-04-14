function Button({ text }) {
  return (
    <button
      className="w-full h-10 text-odinbook-light bg-odinbook-altDark z-50 self-center 
      rounded-md dark:bg-darkmode-altDark"
    >
      {text}
    </button>
  );
}

export default Button;
