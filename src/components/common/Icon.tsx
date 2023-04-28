import { useTheme } from 'styled-components';

type IconProps = {
  src: string;
  alt: string;
  size: number;
};

export const Icon = (props: IconProps) => {
  const { src, alt, size } = props;
  const theme = useTheme();

  return <img src={src} alt={alt} width={theme.size(size)} height={theme.size(size)} />;
};
