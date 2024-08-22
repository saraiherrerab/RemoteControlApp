
import { StoryFn} from '@storybook/react';
import MyInput, { InputProps } from './Input';

export default{
    title:"components/Input",
    component: MyInput,

}

const Template: StoryFn<InputProps> = (args: InputProps) => <MyInput {...args} />;


export const Siguiente = Template.bind({});
Siguiente.args = {
    placeholderText: 'Siguiente',
    tituloInput: 'Titulo input',
    idInputWifi: 'primer-id'
};