interface CheckCircleIconProps {
  circleColor?: string;
}

function CheckCircleIcon({ circleColor }: CheckCircleIconProps) {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="38"
        cy="38"
        r="38"
        fill={circleColor ? circleColor : `var(--light-black)`}
      />
      <path
        d="M23 34.0377L35.0471 48L55 28"
        stroke="white"
        stroke-width="7.49999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CheckCircleIcon;
