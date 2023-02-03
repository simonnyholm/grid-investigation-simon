import GenericTable from "../components/GenericTable";
import dataJson from '../data.json'
import { COLUMNS } from '../components/Columns';

const flatData = dataJson.flatMap((transactionGroup) => transactionGroup.transactions);


export default {
    title: 'Table exmples/Generic React Table',
    component: GenericTable
};


const Template = (args) => <GenericTable {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
    data: flatData,
    columns: COLUMNS,
    groupBy: []
};