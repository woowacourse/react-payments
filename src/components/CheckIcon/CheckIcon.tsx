interface CheckIconProps {
  fill?: string;
}

function CheckIcon({ fill = "#333333" }: CheckIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
    >
      <circle cx="38" cy="38" r="38" fill={fill} />
      <path
        d="M23 34.0377L35.0471 48L55 28"
        stroke="white"
        strokeWidth="7.49999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckIcon;
