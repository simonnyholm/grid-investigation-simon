import { useTable, useSortBy, useFilters, useGlobalFilter, useExpanded, usePagination, useRowSelect, useGroupBy } from "react-table";
import dataJson from '../data.json'
import { COLUMNS } from "./Columns";
import { useMemo } from 'react';
import RowComponent from "./RowComponent";
import GlobalFilter from "./GlobalFilter";
import IndeterminateCheckbox from "./IndeterminateCheckbox";



const GenericTable = () => {

    console.log("rawJson", dataJson);
    

    // const modifiedData = dataJson.map((person) => {
    //     return {
    //         PersonDebitorPatientKey: person.debtor.patientKey,
    //         PersonPatientName: person.patient.name,
    //         PersonAmount: person.amount,
    //         personTransactions: person.transactions,
    //         subRows:  (personTransactions) 
    //         ? person.transactions.map((transaction) => {
    //             return {
    //             TransactionName : transaction.name,
    //         : null
    //             };
    //           }),
          
    //     }
    //   });

    const flatData = dataJson.flatMap((transactionGroup) => transactionGroup.transactions);

    console.log("flatData", flatData);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => flatData, [])
    const groupBy = useMemo(() => ["patient.name"], []);

    const tableInstance = useTable({
        columns,
        data,
        initialState: {
            groupBy
        }
    },
    useGlobalFilter,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useRowSelect,
    hooks => {
        hooks.visibleColumns.push(columns => [
            // Let's make a column for selection
            {
              id: 'selection',
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                </div>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <div>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </div>
              ),
            },
            ...columns,
          ])
    }
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, getRowProps, state: {expanded, selectedRowIds}, setGlobalFilter} = tableInstance

    // const { globalFilter } = state

    console.log("rowsLength", rows.length);


    return (
        <>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (            
                        <tr key="" {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>

                                    <div style={{display: "flex", paddingRight: "20px"}}>
                                        <div>{column.render('Header')}</div>
                                        <div>{column.isSorted ? (column.isSortedDesc ? '▼' : '▲'): ''}</div>
                                        <div {...column.getSortByToggleProps()}> <div style={{width: "30px", height: "100%", paddingRight: "10px"}}></div></div>
                                        <div>{column.canFilter ? column.render('Filter') : null }</div>
                                    </div>
                                    
                                    
                                </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row, i) => {
                        prepareRow(row)
                        return (
                                <>
                                <tr key={i} {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell => {
                                            return  (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>  
                                            )            
                                        })
                                    }
                                </tr>
                                </>
                            )
                    })
                }
            </tbody>
        </table>
        <div><p>{rows.length}</p></div>
        <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
        </>
    )
}



export default GenericTable;