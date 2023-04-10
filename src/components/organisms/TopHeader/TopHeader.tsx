import { Phone } from '@/components/molecules/Phone/Phone';
import { SocialNetworks } from '@/components/molecules/SocialNetWorks/SocialNetworks';
import React from 'react';

export interface TopHeaderProps {
  facebook: string;
  instagram: string;
  twitter: string;
  phone: string;
}

export const TopHeader = ({
  facebook,
  instagram,
  twitter,
  phone,
}: TopHeaderProps) => {
  return (
    <header className="w-full flex justify-end gap-4 items-center py-2">
      <Phone phone={phone} />
      <SocialNetworks
        facebook={facebook}
        instagram={instagram}
        twitter={twitter}
      />
    </header>
  );
};
