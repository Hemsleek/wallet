import { navOptions } from "../../../constantData";

import "./Dropdown.scss";

const Dropdown = ({ state }: { state: boolean }) => {
  return (
    <div className={`Dropdown ${state ? "show" : ""}`}>
      {navOptions.map((option, index) => (
        <div key={`dropdown_${index}`} className="option">
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
