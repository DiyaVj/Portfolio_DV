/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-2 text-1xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
