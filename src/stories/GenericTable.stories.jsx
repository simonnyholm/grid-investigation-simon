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
        name: "John Doe",
        age: 44,
        address: {
            city: "Odense"
        }
    },
    {
        name: "Jane Doe",
        age: 23,
        address: {
            city: "Odense"
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
        Header: 'Full name',
        accessor: 'name',
        Filter: ColumnFilter,
    },
    {
        Header: 'Age',
        accessor: 'age',
        Filter: ColumnFilter,
    },
    {
        Header: 'City',
        accessor: 'address.city',
        Filter: ColumnFilter,
        aggregate: AggregateDiv,
    },
];

const Template = (args) => <GenericTable {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
    data: testData,
    columns: testColumns,
    groupBy: ['address.city'],
};