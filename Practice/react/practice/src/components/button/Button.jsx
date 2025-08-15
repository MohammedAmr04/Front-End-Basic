const Button = ({ click, children }) => {
  return (
    <button
      className="px-3.5 bg-amber-300 rounded-2xl cursor-pointer py-2 "
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
