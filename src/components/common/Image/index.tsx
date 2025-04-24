import { ComponentProps } from 'react';

import { StyledCustomImage } from './CustomImage.styled';

export type Props = ComponentProps<'img'>;

export const CustomImage = ({ ...props }: Props) => {
  return <StyledCustomImage {...props} />;
};
