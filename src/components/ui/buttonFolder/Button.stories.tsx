
import { StoryFn} from '@storybook/react';
import MyButton, { ButtonProps } from './Button';

export default{
    title:"components/Button",
    component: MyButton,

}

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <MyButton {...args} />;


export const Siguiente = Template.bind({});
Siguiente.args = {
  buttonText: 'Siguiente',
};

