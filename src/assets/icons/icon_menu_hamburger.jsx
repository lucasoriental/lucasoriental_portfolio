import PropTypes from "prop-types";

MenuHamburguer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
};

export default function MenuHamburguer({
  width,
  height,
  strokeWidth,
  strokeColor,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3H38"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3 13H38"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3 23H38"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
