import { Text } from '@/components/atoms/Text';
import Link from 'next/link';
import React from 'react';

export interface MenuItem {
  url: string;
  text: string;
}

export interface Props {
  items: MenuItem[];
}

export const Menu = ({ items }: Props) => {
  return (
    <ul className="flex flex-row gap-8">
      {items.map((item) => (
        <Link passHref href={item.url}>
          <li className="opacity-70">
            <Text text={item.text} uppercased={true} />
          </li>
        </Link>
      ))}
    </ul>
  );
};
