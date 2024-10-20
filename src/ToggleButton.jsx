const ToggleButton = ({ isOpen, onToggleClick }) => {
  return (
    <button className="btn btn-circle btn-outline" onClick={onToggleClick}>
      {isOpen ? "-" : "+"}
    </button>
  );
};
export default ToggleButton;
