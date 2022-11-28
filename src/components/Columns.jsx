import ColumnFilter from '../components/ColumnFilter.js'


export const COLUMNS = [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row, rows, toggleRowExpanded }) =>
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
                onClick: () => {
                  const expandedRow = rows.find(row => row.isExpanded);
                  // ExpandedRow: rows, som er expanderede

                  if (expandedRow) {
                    const isSubItemOfRow = Boolean(
                      expandedRow && row.id.split(".")[0] === expandedRow.id
                    );

                    if (isSubItemOfRow) {
                      const expandedSubItem = expandedRow.subRows.find(
                        subRow => subRow.isExpanded
                      );

                      if (expandedSubItem) {
                        const isClickedOnExpandedSubItem =
                          expandedSubItem.id === row.id;
                        if (!isClickedOnExpandedSubItem) {
                          toggleRowExpanded(expandedSubItem.id, false);
                        }
                      }
                    } else {
                      toggleRowExpanded(expandedRow.id, false);
                    }
                    
                  }
                  else {
                  row.toggleRowExpanded();
                  console.log("unExpand");  
                  }

                }
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
        {
            Header: 'Leverandør',
            accessor: 'supplier.name',
            Filter: ColumnFilter
        },
        {
            Header: 'Ydelse',
            accessor: 'name',
            Filter: ColumnFilter
        },
        {
          Header: 'Periode, start',
          accessor: 'billingStartDate',
          Filter: ColumnFilter
        },
        {
          Header: 'Periode, slut (merge?)',
          accessor: 'billingEndDate',
          Filter: ColumnFilter
        },
        {
          Header: 'Beløb',
          accessor: 'amount',
          Filter: ColumnFilter
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
          Header: 'Status (if/else?',
          accessor: 'state',
          Filter: ColumnFilter
        },
        {
          Header: 'Overført',
          accessor: 'ExportTime',
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