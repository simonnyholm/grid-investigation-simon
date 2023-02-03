import GenericTable from "../components/GenericTable";
import ColumnFilter from '../components/ColumnFilter.js'
import RowExpander from "../components/RowExpander";
import HeaderExpander from "../components/HeaderExpander";
import AggregateDiv from "../components/AggregateDiv";
import formatCurrency from "../components/utils/formatCurrency";
import preciseSum from "../components/utils/preciseSum";

export default {
    title: 'Table examples/Generic React Table',
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
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Hyldgaarden"
        }

    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Frokost",
        amount: 140.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Hyldgaarden"
        }

    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Omsorgsbesøg",
        amount: 140.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Villa Nova"
        }

    },
    {
        deptor: {
            key: "221166-5621",
            name: "Poul Geertsen"

        },
        name: "Massage",
        amount: 540.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
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
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
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
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Vanghuset"
        }
    },
    {
        deptor: {
            key: "120451-5621",
            name: "Karl Lindeberg"

        },
        name: "Rengøring",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Vanghuset"
        }
    },
    {
        deptor: {
            key: "120451-5621",
            name: "Karl Lindeberg"

        },
        name: "Vask",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Vanghuset"
        }
    },{
        deptor: {
            key: "110146-3488",
            name: "Fatima Mahmud"

        },
        name: "Rengøring",
        amount: 230.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Vanghuset"
        }
    },
    {
        deptor: {
            key: "110146-3488",
            name: "Fatima Mahmud"

        },
        name: "Vask",
        amount: 330.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Vanghuset"
        }
    },
    {
        deptor: {
            key: "110146-3488",
            name: "Fatima Mahmud"

        },
        name: "Omsorgsbesøg",
        amount: 130.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "Vanghuset"
        }
    },
    {
        deptor: {
            key: "291249-3484",
            name: "Lasse Ellestrup"

        },
        name: "Omsorgsbesøg",
        amount: 130.00,
        billingStartDate: "2023-01-02",
        billingEndDate: "2023-28-02",
        supplier: {
            name: "GoCare"
        }
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
        Header: 'periode',
        accessor: function(row, rowIndex) {
            return row.billingStartDate + " - " + row.billingEndDate;},
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
        Header: 'Supplier',
        accessor: 'supplier.name',
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
        Header: 'Periode',
        accessor: function(row, rowIndex) {
            return row.billingStartDate + " - " + row.billingEndDate;},
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
    columns: ungroupedColumns,
    groupBy: [],
};

export const GroupedExample = Template.bind({});
GroupedExample.args = {
    data: testData,
    columns: groupedColumns,
    groupBy: ['deptor.key'],
};