import { FC, MouseEvent } from 'react';
import { IconButtonContainer } from './styles';

export interface IconButtonProps {
  backgroundColor?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const IconButton: FC<IconButtonProps> = ({ children, backgroundColor, onClick }) => {
  return (
    <IconButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
      <button type="button" />
      <span>{children}</span>
    </IconButtonContainer>
  );
};

export default IconButton;
