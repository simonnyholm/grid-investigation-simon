import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

export default ({ row, rows, toggleRowExpanded }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span role="button" tabIndex="0"
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },

              })}
            >
              {row.isExpanded ? <BsChevronDown size={15}/> : <BsChevronRight size={15}/>}
            </span>
            ) : null;