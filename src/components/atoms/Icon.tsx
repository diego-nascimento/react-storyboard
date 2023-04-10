import { IconType } from 'react-icons';

interface Props {
  Icon: IconType;
  color?: string;
}

export const CustomIcon = ({ Icon, color = '#fff' }: Props) => {
  return <Icon size={20} color={color} />;
};
