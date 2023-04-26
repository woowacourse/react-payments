interface SvgIconProps {
  type: string;
  size?: number;
}

const SvgIcon = ({ type, size }: SvgIconProps) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/icon/${type}.svg`}
      width={size}
      height={size}
    />
  );
};

export default SvgIcon;
