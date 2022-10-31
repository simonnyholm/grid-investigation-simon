export const COLUMNS = [

{
    Header: "Id",
    accessor: "patient.id"
},
{
    Header: 'Borger',
    accessor: 'patient.name'

},
{
    Header: 'Amount',
    accessor: 'amount'
}
]

//Dette array skal mulivis ind og ligge i table-komponentet, hvor header/accesser skal være variabler via props