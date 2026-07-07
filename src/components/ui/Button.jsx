const Button = ({ children, onClick, isIcon }) => {
  return (
    <button
      className={`rounded-full bg-white/20 backdrop-blur-md text-base text-white hover:bg-gray-100/60 transition-colors duration-200 ${
        isIcon
          ? "w-12 h-12 flex items-center justify-center text-lg"
          : "px-8 py-[12px]"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
