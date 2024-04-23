import theme from '../../styles/theme';

interface ArrowIconProps {
  isActive: boolean;
}

const ArrowIcon = ({ isActive }: ArrowIconProps) => {
  return (
    <svg
      width="1.6rem"
      height="1.6rem"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <path
        d="M12.1801 9.54985L8.36014 5.72992L4.54021 9.54985"
        stroke={isActive ? theme.color.black : theme.color.lightGray}
        strokeWidth="1.32867"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
