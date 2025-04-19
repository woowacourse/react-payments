interface ArrowIconProps {
  direction: "up" | "right" | "down" | "left";
  color?: string;
}

const rotations = {
  up: "0",
  right: "90",
  down: "180",
  left: "270",
};

function ArrowIcon({ direction, color = "#acacac" }: ArrowIconProps) {
  const rotation = rotations[direction] ?? rotations.up;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M12.1801 9.54985L8.36014 5.72992L4.54021 9.54985"
        stroke={color}
        strokeWidth="1.32867"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
