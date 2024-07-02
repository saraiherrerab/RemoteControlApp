import { StoryFn } from '@storybook/react';
import Rectangulo, { RectanguloProps } from './Rectangulo';
import image0_2014_275 from './caritaFeliz.svg';

export default {
    title: "components/Rectangulo",
    component: Rectangulo,
}

const Template: StoryFn<RectanguloProps> = (args: RectanguloProps) => <Rectangulo {...args} />;

export const Texto = Template.bind({});
Texto.args = {
    texto: 'Para poder configurar tu monedito, primero necesitas activar Bluetooth en tu dispositivo y conectarte a una red WiFi.',
    imagen: image0_2014_275,
};
