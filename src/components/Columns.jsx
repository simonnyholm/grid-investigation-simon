import ColumnFilter from '../components/ColumnFilter.js'
import AggregateDiv from './AggregateDiv.js';
import preciseSum from "./utils/preciseSum";
import formatCurrency from './utils/formatCurrency.js';
import RowExpander from './RowExpander.jsx';
import HeaderExpander from './HeaderExpander.jsx';

function toggleByOnKeyUp () {
  console.log("btn toggled by onKeyUp"); 
  //Meant for working ot a way to toggle non-btn-tagged buttons via onKeyUp events,
  //so that users that do not use a mouse can expand the grouped rows
  //This function might be replaced with a built-in function from the react tables library
  //We just need to work out what function :D

}

export const COLUMNS = (t) => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: HeaderExpander,
        Cell: RowExpander
        },
        {
          Header: 'Debitor',
          accessor: 'debtor.patientKey',
          Filter: ColumnFilter,
          aggregate: AggregateDiv
          

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
            aggregate: AggregateDiv
            
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
          Filter: ColumnFilter,
          aggregate: AggregateDiv
        },
        {
          Header: 'Beløb',
          accessor: 'amount',
          Filter: ColumnFilter,
          Cell: formatCurrency,
          aggregate: preciseSum
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
          aggregate: AggregateDiv,
          Cell: ({ value }) => t('transactionstate.' + value)
        },
        {
          Header: 'Overført',
          accessor: 'ExportTime',
          Filter: ColumnFilter,
          aggregate: AggregateDiv
        },
        

    ]

// Herover defineres columns med id, Header, cell, accessor og Filter
// Vi skal finde ud af, om korrekt formattering af dato, valuta mv og rendering af oversættelser og fx relevante status-beskeder, sker her(?)

//Dette array skal mulivis ind og ligge i table-komponentet, hvor header/accesser skal være variabler via props - Stadig relevant?