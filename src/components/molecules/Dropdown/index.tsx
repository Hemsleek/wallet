/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { navOptions } from "../../../constantData";

import "./Dropdown.scss";

const Dropdown = forwardRef(({ state }: { state: boolean }, ref: any) => {
  return (
    <div
      ref={ref}
      data-name="drop-down"
      className={`Dropdown ${state ? "show" : ""}`}
    >
      {navOptions.map((option, index) => (
        <div
          onClick={() => {}}
          data-name="drop-down"
          key={`dropdown_${index}`}
          className={`option ${
            index === navOptions.length - 1 && "last-index"
          }`}
        >
          <span data-name="drop-down">{option}</span>
        </div>
      ))}
    </div>
  );
});

export default Dropdown;
