interface Props {
  children: React.ReactNode;
  ariaLabel: string;
  width: string;
  height: string;
  viewBox: string;
  file?: string;
}

const Icon = ({ children, ariaLabel, width, height, viewBox, file }: Props) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={file || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icon;
