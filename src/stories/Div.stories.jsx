import { Div } from "./Div"

export default {
    title: 'Example/Div',
    component: Div
};

const Template = (args) => <Div {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
    title: 'A title',
    text: 'Some text'
};