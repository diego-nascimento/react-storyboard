import { Meta, StoryObj } from '@storybook/react';
import { FullHeader, FullHeaderProps } from './FullHeader';

export default {
  title: 'organisms/FullHeader',
  component: FullHeader,
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

export const FullHeaderConfigs = {
  args: {
    BottomHeaderProps: {
      onClickHandler: () => console.log('clicou'),
      menuItems: [
        {
          text: 'Item 1',
          url: 'url1 ',
        },
        {
          text: 'Item 2',
          url: 'url2',
        },
      ],
    },
    topHeaderProps: {
      facebook: 'facebook.com',
      instagram: 'instagram.com',
      phone: '(32) 99910-7767',
      twitter: 'twitter.com',
    },
  } as FullHeaderProps,
} as StoryObj;
