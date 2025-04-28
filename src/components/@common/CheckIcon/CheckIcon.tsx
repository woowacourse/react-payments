import { ComponentProps } from "react";

export function CheckIcon({ fill = "#333" }: ComponentProps<"svg">) {
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
        stroke-width="7.49999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
