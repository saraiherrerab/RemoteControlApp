import { StoryFn } from '@storybook/react';
import DefaultMessages, { DefaultMessagesProps} from './DefaultMessages';
import image0_2037_443 from './icon1.svg';

export default {
    title: "components/DefaultMessages",
    component: DefaultMessages,
}

const Template: StoryFn<DefaultMessagesProps> = (args: DefaultMessagesProps) => <DefaultMessages {...args} />;

export const MessageText = Template.bind({});
MessageText.args = {
    defaultmessageText: 'Tasa BCV del dolar [Tasa]',
    icon: image0_2037_443,
};
