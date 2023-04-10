import { Meta, StoryObj } from '@storybook/react';
import { Phone, Props } from './Phone';

export default {
  title: 'molecules/Phone',
  component: Phone,
} as Meta;

export const PhoneProps = {
  args: {
    phone: '(32) 99910-7767',
  } as Props,
} as StoryObj;
