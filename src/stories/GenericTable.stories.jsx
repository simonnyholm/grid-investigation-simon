import GenericTable from "../components/GenericTable";
import ColumnFilter from '../components/ColumnFilter.js'
import RowExpander from "../components/RowExpander";
import HeaderExpander from "../components/HeaderExpander";
import AggregateDiv from "../components/AggregateDiv";
import formatCurrency from "../components/utils/formatCurrency";
import preciseSum from "../components/utils/preciseSum";
import { DateTime } from "luxon";

export default {
    title: 'Table examples/Generic React Table',
    component: GenericTable
};

const utcFormat = new Intl.DateTimeFormat('da', {day: 'numeric', month: 'short', year: 'numeric'});



const testData = [
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        patient: {
            businessKey: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Vask",
        amount: 440.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-02-28",
        supplier: {
            name: "Hyldgaarden"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",

    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        patient: {
            businessKey: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Frokost",
        amount: 140.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-03",
        supplier: {
            name: "Hyldgaarden"
        },
        accountDisplayValue: 6790038575,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",

    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        patient: {
            businessKey: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Omsorgsbesøg",
        amount: 140.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-02",
        supplier: {
            name: "Villa Nova"
        },
        accountDisplayValue: 6732034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        patient: {
            businessKey: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Massage",
        amount: 540.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-02",
        supplier: {
            name: "Hyldgaarden"
        },
        accountDisplayValue: 8690034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "121164-5621",
            name: "Kirsten Søe"

        },
        patient: {
            businessKey: "121164-5621",
            name: "Kirsten Søe"

        },
        name: "Rengøring",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-04",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "121164-5621",
            name: "Kirsten Søe"

        },
        patient: {
            businessKey: "121164-5621",
            name: "Kirsten Søe"

        },
        name: "Gåtur",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-02",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "120451-5621",
            name: "Karl Lindeberg"

        },
        patient: {
            businessKey: "120451-5621",
            name: "Karl Lindeberg"

        },
        name: "Rengøring",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-02-28",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "120451-5621",
            name: "Karl Lindeberg"

        },
        patient: {
            businessKey: "120451-5621",
            name: "Karl Lindeberg"

        },
        name: "Vask",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-03",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },{
        deptor: {
            key: "110146-3488",
            name: "Fatima Mahmud"

        },
        patient: {
            businessKey: "110146-3488",
            name: "Fatima Mahmud"

        },
        name: "Rengøring",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-03-05",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "110146-3488",
            name: "Fatima Mahmud"

        },
        patient: {
            businessKey: "110146-3488",
            name: "Fatima Mahmud"

        },
        name: "Vask",
        amount: 330.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-04-02",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "110146-3488",
            name: "Fatima Mahmud"

        },
        patient: {
            businessKey: "110146-3488",
            name: "Fatima Mahmud"

        },
        name: "Omsorgsbesøg",
        amount: 130.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-12-02",
        supplier: {
            name: "Vanghuset"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    },
    {
        deptor: {
            key: "291249-3484",
            name: "Lasse Ellestrup"

        },
        patient: {
            businessKey: "291249-3484",
            name: "Lasse Ellestrup"

        },
        name: "Omsorgsbesøg",
        amount: 130.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-03-06",
        supplier: {
            name: "GoCare"
        },
        accountDisplayValue: 6790034175,
        state: "WAITING_FOR_EXPORT",
        exportTime: "Fri, 20 Jan 2023 11:35:05 GMT",
        exportTimeStringDa: "20. jan. 2023 11:35",
        exportTimeEmpty: null,
        accountPaymentType: "672",
    }
];



const groupedColumns = [
    {
        id: "expander",
        Header: HeaderExpander,
        Cell: RowExpander,
    },
    {
        Header: 'Debitor',
        accessor: 'deptor.key',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Borger',
        accessor: function(row, rowIndex) {
            return row.patient.name + " " + row.patient.businessKey},
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Leverandør',
        accessor: 'supplier.name',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Ydelse',
        accessor: 'name',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Periode',
        accessor: function(row, rowIndex) {

            var startTime = DateTime.fromISO(row.billingStartDate).toLocaleString(DateTime.DATE_MED, { locale: 'da' })

            var endTime = DateTime.fromISO(row.billingEndDate).toLocaleString(DateTime.DATE_MED, { locale: 'da' })

            console.log(endTime);

            return startTime + " - " + endTime},
        
    
        Filter: ColumnFilter,
       
    },
    {
        Header: 'Beløb',
        accessor: 'amount',
        Cell: formatCurrency,
        Filter: ColumnFilter,
        aggregate: preciseSum,
    },
    {
        Header: 'Konto',
        accessor: 'accountDisplayValue',
        Filter: ColumnFilter,
    },
    {
        Header: 'Betalingsart',
        accessor: 'accountPaymentType',
        Filter: ColumnFilter,
    },
    {
        Header: 'Status',
        accessor: 'state',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Overført',
        accessor: function(row, rowIndex) {

            const exportTimeVar = utcFormat.format(new Date(row.exportTime))

            return exportTimeVar},
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },

];

const groupedColumnsAllAggregated = [
    {
        id: "expander",
        Header: HeaderExpander,
        Cell: RowExpander,
    },
    {
        Header: 'Debitor',
        accessor: 'deptor.key',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Borger',
        accessor: function(row, rowIndex) {
            return row.patient.name + " " + row.patient.businessKey},
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Leverandør',
        accessor: 'supplier.name',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Ydelse',
        accessor: 'name',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Periode',
        accessor: function(row, rowIndex) {

            var startTime = DateTime.fromISO(row.billingStartDate).toLocaleString(DateTime.DATE_MED, { locale: 'da' })

            var endTime = DateTime.fromISO(row.billingEndDate).toLocaleString(DateTime.DATE_MED, { locale: 'da' })

            console.log(endTime);

            return startTime + " - " + endTime},
        
    
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
       
    },
    {
        Header: 'Beløb',
        accessor: 'amount',
        Cell: formatCurrency,
        Filter: ColumnFilter,
        aggregate: preciseSum,
    },
    {
        Header: 'Konto',
        accessor: 'accountDisplayValue',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Betalingsart',
        accessor: 'accountPaymentType',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Status',
        accessor: 'state',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Overført',
        accessor: function(row, rowIndex) {

            const exportTimeVar = utcFormat.format(new Date(row.exportTime))

            return exportTimeVar},
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },

];

const ungroupedColumns = [
    {
        Header: 'Debitor',
        accessor: 'deptor.key',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Borger',
        accessor: function(row, rowIndex) {
            return row.patient.name + " " + row.patient.businessKey},
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Leverendør',
        accessor: 'supplier.name',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Ydelse',
        accessor: 'name',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Periode',
        accessor:  function(row, rowIndex) {

            var startTime = DateTime.fromISO(row.billingStartDate).toLocaleString(DateTime.DATE_MED, { locale: 'da' })

            var endTime = DateTime.fromISO(row.billingEndDate).toLocaleString(DateTime.DATE_MED, { locale: 'da' })

            return startTime + " - " + endTime},
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Beløb',
        accessor: 'amount',
        Cell: formatCurrency,
        Filter: ColumnFilter,
        aggregate: preciseSum,
    },
    {
        Header: 'Konto',
        accessor: 'accountDisplayValue',
        Filter: ColumnFilter,
    },
    {
        Header: 'Status',
        accessor: 'state',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
    {
        Header: 'Overført',
        accessor: 'exportTimeStringDa',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
];

const Template = (args) => <GenericTable {...args} />;

export const ungroupedExample = Template.bind({});
ungroupedExample.args = {
    data: testData,
    columns: ungroupedColumns,
    groupBy: [],
};

export const GroupedExample = Template.bind({});
GroupedExample.args = {
    data: testData,
    columns: groupedColumns,
    groupBy: ['deptor.key'],
};

export const GroupedExampleAllColumnsAggregated = Template.bind({});
GroupedExampleAllColumnsAggregated.args = {
    data: testData,
    columns: groupedColumnsAllAggregated,
    groupBy: ['deptor.key'],
};