import React from 'react';
import { BottomHeader, BottomHeaderProps } from '../BottomHeader/BottomHeader';
import { TopHeader, TopHeaderProps } from '../TopHeader/TopHeader';

export interface FullHeaderProps {
  topHeaderProps: TopHeaderProps;
  BottomHeaderProps: BottomHeaderProps;
}

export const FullHeader = ({
  BottomHeaderProps,
  topHeaderProps,
}: FullHeaderProps) => {
  return (
    <div>
      <TopHeader {...topHeaderProps} />
      <BottomHeader {...BottomHeaderProps} />
    </div>
  );
};
