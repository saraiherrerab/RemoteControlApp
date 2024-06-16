import { StoryFn, Meta } from '@storybook/react';
import BluetoothSection, { BluetoothSectionProps } from './BluetoothSection';

export default {
  title: 'components/BluetoothSection',
  component: BluetoothSection,
} as Meta;

const Template: StoryFn<BluetoothSectionProps> = (args) => <BluetoothSection {...args} />;

export const BluetoothSwitch = Template.bind({});
BluetoothSwitch.args = {
  bluetoothText: 'Activar Bluetooth',
};
