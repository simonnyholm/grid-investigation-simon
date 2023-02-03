import GenericTable from "../components/GenericTable";
import ColumnFilter from '../components/ColumnFilter.js'
import RowExpander from "../components/RowExpander";
import HeaderExpander from "../components/HeaderExpander";
import AggregateDiv from "../components/AggregateDiv";

export default {
    title: 'Table exmples/Generic React Table',
    component: GenericTable
};

const testData = [
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Vask",
        amount: 440.00,
        supplier: {
            name: "Hyldgaarden"
        }

    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Massage",
        amount: 540.00,
        supplier: {
            name: "Hyldgaarden"
        }

    },
    {
        deptor: {
            key: "121164-5621",
            name: "Kirsten Søe"

        },
        name: "Rengøring",
        amount: 230.00,
        supplier: {
            name: "Vanghuset"
        }
    },
    {
        deptor: {
            key: "121164-5621",
            name: "Kirsten Søe"

        },
        name: "Gåtur",
        amount: 230.00,
        supplier: {
            name: "Vanghuset"
        }
    }
];

const testColumns = [
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
        Header: 'Navn',
        accessor: 'deptor.name',
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
        Header: 'Beløb',
        accessor: 'amount',
        Filter: ColumnFilter,
    },
    {
        Header: 'Supplier',
        accessor: 'supplier.name',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
];

const Template = (args) => <GenericTable {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
    data: testData,
    columns: testColumns,
    groupBy: [],
};

export const GroupedExample = Template.bind({});
GroupedExample.args = {
    data: testData,
    columns: testColumns,
    groupBy: ['deptor.key'],
};