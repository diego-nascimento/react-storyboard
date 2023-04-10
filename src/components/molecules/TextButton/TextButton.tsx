import { Button } from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text';

import React from 'react';

export interface Props {
  buttonText: string;
  bgTransparent: boolean;
  onClickHandler: () => void;
}

export const TextButton = ({
  buttonText,
  bgTransparent,
  onClickHandler,
}: Props) => {
  return (
    <Button transparent={bgTransparent} onClickHandler={onClickHandler}>
      <Text text={buttonText} />
    </Button>
  );
};
