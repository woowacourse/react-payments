import { MouseEvent } from 'react';
import { IconButtonContainer } from './styles';

export interface IconButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const IconButton = ({ children, backgroundColor, onClick }: IconButtonProps) => {
  return (
    <IconButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
      <button type="button" />
      <span>{children}</span>
    </IconButtonContainer>
  );
};

export default IconButton;
