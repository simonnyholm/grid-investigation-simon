import ColumnFilter from '../components/ColumnFilter.js'

export const COLUMNS = [

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

//Dette array skal mulivis ind og ligge i table-komponentet, hvor header/accesser skal være variabler via props