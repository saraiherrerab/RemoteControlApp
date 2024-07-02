import {StoryFn} from '@storybook/react';
import Header, {HeaderProps} from './Header';

export default{
    title:'components/Header',
    component: Header,
}

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => <Header {...args}/>;

export const MoneditoTitle = Template.bind({});

MoneditoTitle.args ={
    title:'Monedito',
    subtitle:'Encabezado de prueba',
};