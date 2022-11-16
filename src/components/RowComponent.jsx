const RowComponent = ({row, getRowProps, getCellProps}) => {
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

}

export default RowComponent