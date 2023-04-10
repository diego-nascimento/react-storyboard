import React, { PropsWithChildren, ReactNode } from 'react';

export interface Props {
  transparent: boolean;
  children: ReactNode;
  onClickHandler: () => void;
}

export const Button = ({ children, transparent, onClickHandler }: Props) => {
  return (
    <button
      onClick={onClickHandler}
      className={`flex justify-center items-center py-2 px-8  rounded-lg ${
        transparent ? 'bg-transparent border-2' : 'bg-red-700'
      }`}
    >
      {children}
    </button>
  );
};
