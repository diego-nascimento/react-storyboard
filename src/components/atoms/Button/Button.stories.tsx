import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from '../Text';
import { Button, Props } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => {
      return (
        <Story>
          <h1>Valor</h1>
        </Story>
      );
    },
  ],
} as Meta;

export const ButtonProps = {
  args: {
    transparent: true,
    children: <Text text="Value teste" />,
  } as Props,
} as StoryObj;
