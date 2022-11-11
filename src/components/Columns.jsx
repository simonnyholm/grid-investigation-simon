import ColumnFilter from '../components/ColumnFilter.js'
import { useMemo } from 'react';

export const COLUMNS = [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
            ) : null,
        },
        {
          Header: 'Debitor',
          accessor: 'debtor.patientKey',
          Filter: ColumnFilter

        },
        {
          Header: 'Borger',
            accessor: 'patient.name',
            Filter: ColumnFilter
          },
        ]
        
      


/*

Herunder er det simple array, der ikke kan ekspanderes


[

{
    Header: "Id",
    accessor: "patient.id",
    Filter: ColumnFilter
},
{
    Header: 'Borger',
    accessor: 'patient.name',
    Filter: ColumnFilter

},
{
    Header: 'Amount',
    accessor: 'amount',
    Filter: ColumnFilter
}
]

*/

//Dette array skal mulivis ind og ligge i table-komponentet, hvor header/accesser skal være variabler via props