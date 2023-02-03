import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

export default ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
    <span role="button" tabIndex="0" {...getToggleAllRowsExpandedProps()}>
      {isAllRowsExpanded ? <BsChevronDown size={18}/> : <BsChevronRight size={18}/>}
    </span>
  );