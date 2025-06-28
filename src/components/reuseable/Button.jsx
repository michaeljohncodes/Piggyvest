const Button = ({ title, Color, borderColor, bgColor, icon, borderRadius }) => {
  return (
    <button
      style={{
        color: `${Color}`,
        border: `2px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
        borderRadius: `${borderRadius}`,
      }}
      className="  pr-4  py-3 flex items-center w-max"
    >
      <span className=" mx-2">{icon}</span>
      <span className=" font-medium">{title}</span>
    </button>
  );
};

export default Button;
