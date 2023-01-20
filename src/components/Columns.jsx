import ColumnFilter from '../components/ColumnFilter.js'
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import numeral from "numeral";
import genericTableCss from "./GenericTable.css"

function toggleByOnKeyUp () {
  console.log("btn toggled by onKeyUp"); 
  //Meant for working ot a way to toggle non-btn-tagged buttons via onKeyUp events,
  //so that users that do not use a mouse can expand the grouped rows

}

export const COLUMNS = [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span role="button" onKeyUp={toggleByOnKeyUp} tabIndex="0" {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? <BsChevronDown size={18}/> : <BsChevronRight size={18}/>}
          </span>
        ),
        Cell: ({ row, rows, toggleRowExpanded }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span role="button" onKeyUp={toggleByOnKeyUp} tabIndex="0"
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
            ) : null,
        },
        {
          Header: 'Debitor',
          accessor: 'debtor.patientKey',
          Filter: ColumnFilter,
          aggregate: function(leafValues) {
            return leafValues[0]
          }

        },
        {
          Header: 'Borger',
          accessor: 'patient.name',
          Filter: ColumnFilter
        },
        {
            Header: 'Leverandør',
            accessor: 'supplier.name',
            Filter: ColumnFilter,
            aggregate: function(leafValues) {
              return leafValues[0]
            }
        },
        {
            Header: 'Ydelse',
            accessor: 'name',
            Filter: ColumnFilter
        },
        {
          Header: 'Periode',
          accessor: function(row, rowIndex) {
            return row.billingStartDate + " - " + row.billingEndDate;
          },
          Filter: ColumnFilter
        },
        {
          Header: 'Beløb',
          accessor: 'amount',
          Filter: ColumnFilter,
          Cell: ({ value }) => numeral(value).format("0.00"),
          aggregate: function(leafValues) {
            const initialValue = numeral(0);
            const sum = leafValues.reduce((a, b) => a.add(b), initialValue);
            return sum.value();
          }
        },
        {
          Header: 'Konto',
          accessor: 'accountDisplayValue',
          Filter: ColumnFilter
        },
        {
          Header: 'Betalingsart',
          accessor: 'accountPaymentType',
          Filter: ColumnFilter
        },
        {
          Header: 'Status',
          accessor: 'state',
          Filter: ColumnFilter,
          aggregate: function(leafValues) {
            return leafValues[0]
          }
        },
        {
          Header: 'Overført',
          accessor: 'ExportTime',
          Filter: ColumnFilter,
          aggregate: function(leafValues) {
            return leafValues[0]
          }
        },
        

    ]

// Herover defineres columns med id, Header, cell, accessor og Filter
// Vi skal finde ud af, om korrekt formattering af dato, valuta mv og rendering af oversættelser og fx relevante status-beskeder, sker her(?)

//Dette array skal mulivis ind og ligge i table-komponentet, hvor header/accesser skal være variabler via props - Stadig relevant?