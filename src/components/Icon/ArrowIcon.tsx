export default function ArrowIcon({ color, rotate }: { color: string; rotate: string }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate})` }}
    >
      <path
        d="M9.1799 4.54979L5.35997 0.729858L1.54004 4.54979"
        stroke={color}
        stroke-width="1.32867"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
