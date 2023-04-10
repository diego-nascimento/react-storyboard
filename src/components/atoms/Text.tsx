import React from 'react';

interface Props {
  text: string;
  uppercased?: boolean;
  bold?: boolean;
}

export const Text = ({ bold = false, uppercased = false, ...props }: Props) => {
  const { text } = props;
  return (
    <span
      className={` list-none ${uppercased ? 'uppercase' : ''} ${
        bold ? 'font-bold' : 'font-medium'
      }`}
    >
      {text}
    </span>
  );
};
