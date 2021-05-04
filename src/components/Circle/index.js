import PropTypes from 'prop-types';

export const Circle = ({ color, diameter }) => {
  const radius = diameter / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      fill="none"
    >
      <circle cx={radius} cy={radius} r={radius} fill={color} />
    </svg>
  );
};

Circle.propTypes = {
  color: PropTypes.string,
  diameter: PropTypes.number,
};

Circle.defaultProps = {
  color: '#04C09E',
  diameter: 4,
};
