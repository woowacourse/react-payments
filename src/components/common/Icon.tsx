type IconProps = {
  src: string;
  alt: string;
  size: number;
};

export const Icon = (props: IconProps) => {
  const { src, alt, size } = props;

  return <img src={src} alt={alt} width={size * 10} height={size * 10} />;
};
