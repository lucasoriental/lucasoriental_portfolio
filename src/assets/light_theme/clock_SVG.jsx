import PropTypes from "prop-types";

ClockLightSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default function ClockLightSVG({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10.8647C2.24292 10.8647 0 8.6196 0 5.85984C0 3.10008 2.24292 0.85498 5 0.85498C7.75708 0.85498 10 3.10008 10 5.85984C10 8.6196 7.75708 10.8647 5 10.8647ZM5 1.68912C2.7025 1.68912 0.833333 3.56011 0.833333 5.85984C0.833333 8.15957 2.7025 10.0306 5 10.0306C7.2975 10.0306 9.16667 8.15957 9.16667 5.85984C9.16667 3.56011 7.2975 1.68912 5 1.68912ZM7.08333 5.85984C7.08333 5.6292 6.89708 5.44277 6.66667 5.44277H5.41667V3.35741C5.41667 3.12677 5.23 2.94034 5 2.94034C4.77 2.94034 4.58333 3.12677 4.58333 3.35741V5.85984C4.58333 6.09048 4.77 6.27691 5 6.27691H6.66667C6.89708 6.27691 7.08333 6.09048 7.08333 5.85984Z"
        fill={color}
      />
    </svg>
  );
}
