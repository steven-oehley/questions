import { useState } from "react";
import { questions } from "./data";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) =>
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);

  return (
    <section>
      {questions.map((question) => (
        <AccordianItem
          key={question.id}
          {...question}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
        />
      ))}
    </section>
  );
};
export default Accordian;
