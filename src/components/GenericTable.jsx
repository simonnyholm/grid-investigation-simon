import { useTable, useSortBy, useFilters } from "react-table";
import dataJson from '../data.json'
import { COLUMNS } from "./Columns";
import { useMemo } from 'react';
import RowComponent from "./RowComponent";

const GenericTable = () => {



    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => dataJson, [])

    const tableInstance = useTable({
        columns,
        data
    },
    useFilters,
    useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, getRowProps} = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                                        
                        <tr key="" {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    <div>{column.render('Header')}</div>
                                    <button {...column.getSortByToggleProps()}>Sortér</button>
                                    
                                    
                                    <div>{column.isSorted ? (column.isSortedDesc ? '▼' : '▲'): ''}</div>
                                    <div>{column.canFilter ? column.render('Filter') : null }</div>
                                </th>
                                
                                ))
                            }

                        </tr>
                    ))
                }

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                                <>
                                
                                <tr key="" {...row.getRowProps()}>
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
    )
}

export default GenericTable;