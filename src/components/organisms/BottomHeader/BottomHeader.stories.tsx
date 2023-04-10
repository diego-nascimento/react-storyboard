import { BottomHeaderProps } from './BottomHeader';
import { Meta, StoryObj } from '@storybook/react';
import { BottomHeader } from './BottomHeader';

export default {
  title: 'organisms/BottomHeader',
  component: BottomHeader,
  decorators: [
    (story) => {
      return (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1280px]">{story()}</div>
        </div>
      );
    },
  ],
} as Meta;

export const HeaderConfig = {
  args: {
    menuItems: [
      {
        text: 'Item 1',
        url: 'any_url',
      },
      {
        text: 'Item 1',
        url: 'any_url',
      },
    ],
  } as BottomHeaderProps,
} as StoryObj;
