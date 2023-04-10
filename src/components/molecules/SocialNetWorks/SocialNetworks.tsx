import { CustomIcon } from '@/components/atoms/Icon';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export interface SocialNetWorksProps {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export const SocialNetworks = ({ facebook, instagram, twitter }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      {facebook && (
        <Link href={facebook}>
          <CustomIcon Icon={FaFacebookF} />
        </Link>
      )}
      {instagram && (
        <Link href={instagram}>
          <CustomIcon Icon={FaInstagram} />
        </Link>
      )}
      {twitter && (
        <Link href={twitter}>
          <CustomIcon Icon={FaTwitter} />
        </Link>
      )}
    </div>
  );
};
