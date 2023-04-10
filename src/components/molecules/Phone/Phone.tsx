import { CustomIcon } from '@/components/atoms/Icon';
import { Text } from '@/components/atoms/Text';
import React, { useMemo } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export interface Props {
  phone: string;
}

export const Phone = ({ phone }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <CustomIcon Icon={FaPhoneAlt} color={'red'} />
      <Text text={phone} />
    </div>
  );
};
