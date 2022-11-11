import { useTable, useSortBy, useFilters, useGlobalFilter, useExpanded, usePagination } from "react-table";
import dataJson from '../data.json'
import { COLUMNS } from "./Columns";
import { useMemo } from 'react';
import RowComponent from "./RowComponent";
import GlobalFilter from "./GlobalFilter";

const GenericTable = () => {

    // const persons = dataJson.map( (person) => {
        

    //     console.log("flatPerson", flatPerson);

    // });
    // console.log("dataPersons", persons);

    console.log("rawJson", dataJson);

    const WhatIf = dataJson.map((person)=>{
        
    })

    const transactionsFlat = [];

    dataJson.forEach((person)=>{
        person.transactions.forEach((transaction)=>{
             transactionsFlat.push({
                "debitor" : person.debtor.patientKey,
                "PersonName" : person.patient.name,
                "TransactionID" : transaction.id,
                "TransactionName" : transaction.name
            });
        });
    });

console.log("transactionsFlat", transactionsFlat);



    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => dataJson, [])

    const tableInstance = useTable({
        columns,
        data
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded
    
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, getRowProps, state: {expanded}, setGlobalFilter} = tableInstance

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
        </>
    )
}



export default GenericTable;