import { StoryFn } from '@storybook/react';
import BluetoothSection from './BluetoothSection';


export default {
    title: 'components/BluetoothSection',
    component: BluetoothSection, 
  };
  
  const Template: StoryFn = () => <BluetoothSection />;
  
  export const BluetoothSwitch = Template.bind({});