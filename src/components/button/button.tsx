import { FC } from 'react';
import { Icon, IconName } from '../icon/icon';

type ButtonProps = {
  onClick: () => void;
  text: string;
  iconName?: IconName;
};

// Style attribute used in JSX only to KISS
const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  backgroundColor: '#fff',
  cursor: 'pointer',
};

export const Button: FC<ButtonProps> = ({
  onClick,
  text,
  iconName,
}: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} style={styles}>
      <span>{text}</span>
      {iconName && <Icon name={iconName} />}
    </button>
  );
};
