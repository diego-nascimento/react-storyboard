import { Meta, StoryObj } from '@storybook/react';
import { SocialNetWorksProps, SocialNetworks } from './SocialNetworks';

export default {
  title: 'molecules/Social Network',
  component: SocialNetworks,
} as Meta;

export const SocialNetworkProps = {
  args: {
    facebook: 'facebook.com',
    instagram: 'facebook.com',
    twitter: 'twitter.com',
  } as SocialNetWorksProps,
} as StoryObj;
