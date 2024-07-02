import { StoryFn } from '@storybook/react';
import WifiDecoration, { WifiDecorationProps } from './WifiDecoration';
import image0_2015_244 from './wifiIcon.svg';

export default {
    title: "components/WifiDecoration",
    component: WifiDecoration,
}

const Template: StoryFn<WifiDecorationProps> = (args: WifiDecorationProps) => <WifiDecoration {...args} />;

export const WifiText = Template.bind({});
WifiText.args = {
    texto: 'WiFi',
    imagen: image0_2015_244,
};