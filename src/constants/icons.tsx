const ICONS = {
  BACKWARD: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="6 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
      width="24"
      height="24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ),
  PLUS: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: '20px', width: '20px' }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
} as const;

export default ICONS;
