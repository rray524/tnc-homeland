export const ToggleButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`w-[80px] px-3 py-3 ${
        isActive ? "bg-yellow-500 text-white" : "bg-gray-100 text-black"
      } font-bold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
