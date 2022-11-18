import { useTable } from "react-table";
import dataJson from '../data.json'
import { COLUMNS } from "./Columns";
import { useMemo } from 'react';
import RowComponent from "./RowComponent";

const BasicTable = () => {



    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => dataJson, [])

    const tableInstance = useTable({
        columns,
        data
    })

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
                                    {column.render('Header')}
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

export default BasicTable;