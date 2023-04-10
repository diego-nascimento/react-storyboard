import { Meta, StoryObj } from '@storybook/react';
import { Props, TextButton } from './TextButton';

export default {
  title: 'molecules/TextButton',
  component: TextButton,
} as Meta;

export const TextButtonData = {
  args: { buttonText: 'Button Text', bgTransparent: false } as Props,
} as StoryObj;
