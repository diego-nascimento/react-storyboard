import { Menu, MenuItem } from '@/components/molecules/Menu/Menu';
import { TextButton } from '@/components/molecules/TextButton/TextButton';
import React from 'react';

export interface BottomHeaderProps {
  menuItems: MenuItem[];
  onClickHandler: () => void;
}

export const BottomHeader = ({
  menuItems,
  onClickHandler,
}: BottomHeaderProps) => {
  return (
    <header className="w-full flex justify-between  py-4">
      <h1>Logo</h1>
      <Menu items={menuItems} />
      <TextButton
        buttonText="Get a Quote"
        bgTransparent={false}
        onClickHandler={onClickHandler}
      />
    </header>
  );
};
