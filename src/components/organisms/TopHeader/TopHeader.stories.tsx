import { Meta, StoryObj } from '@storybook/react';
import { TopHeaderProps as Props, TopHeader } from './TopHeader';

export default {
  title: 'organisms/TopHeader',
  component: TopHeader,
  decorators: [
    (story) => {
      return (
        <div className="w-full flex justify-center items-center ">
          <div className="w-full max-w-[1280px]">{story()}</div>
        </div>
      );
    },
  ],
} as Meta;

export const TopHeaderProps = {
  args: {
    facebook: 'facebook.com',
    instagram: 'instagram.com',
    twitter: 'twitter.com',
    phone: '(32) 99910-7767',
  } as Props,
} as StoryObj;
