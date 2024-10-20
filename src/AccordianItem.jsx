import ToggleButton from "./ToggleButton";

const AccordianItem = ({ title, id, info, onItemClick, activeIndex }) => {
  const handleToggleClick = () => onItemClick(id);
  const isOpen = id === activeIndex;

  return (
    <div className="ring-2 ring-primary p-2 w-1/2 mx-auto rounded-md my-8">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <ToggleButton onToggleClick={handleToggleClick} isOpen={isOpen} />
      </div>
      {isOpen && <p>{info}</p>}
    </div>
  );
};
export default AccordianItem;
