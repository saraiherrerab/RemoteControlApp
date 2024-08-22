
import { StoryFn} from '@storybook/react';
import InputMessage, { InputMessageProps } from './InputMessage';

export default{
    title:"components/InputMessage",
    component: InputMessage,

}

const Template: StoryFn<InputMessageProps> = (args: InputMessageProps) => <InputMessage {...args} />;


export const Siguiente = Template.bind({});
Siguiente.args = {
    placeholderText: 'Siguiente',
    idInputMessage: 'input-uno'
};