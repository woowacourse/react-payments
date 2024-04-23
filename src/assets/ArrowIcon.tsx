interface ArrowIconProps {
  fill?: string;
  rotate: boolean;
}

const ArrowIcon = ({ fill = "#000000", rotate = true }: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="15"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
      style={{ transform: rotate ? "" : "rotate(180deg)" }}
    >
      <g
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path d="M81 316 c-10 -12 1 -28 58 -85 39 -39 78 -71 88 -71 20 0 143 123 143 143 0 9 -9 19 -20 22 -16 5 -31 -5 -66 -44 -25 -28 -51 -51 -58 -51 -7 0 -34 23 -60 50 -50 52 -66 59 -85 36z" />
      </g>
    </svg>
  );
};

export default ArrowIcon;
