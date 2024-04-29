import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

const CheckIconImage = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={28}
    viewBox="0 0 40 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 10.0377L16.0471 24L36 4"
      stroke="white"
      strokeWidth={7.49999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CheckIconImage;
