import React from "react";

class Bell extends React.Component {
  state = {};
  render() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M1.6666 10.6668H14.3333C14.5175 10.6668 14.6666 10.5177 14.6666 10.3335C14.6666 10.1492 14.5175 10.0002 14.3333 10.0002H13.9839C13.8299 6.89837 11.5584 4.381 8.6666 4.04165V3.3335H9.33325C9.5175 3.3335 9.6666 3.1844 9.6666 3.00015V2.66684C9.6666 1.9315 9.06863 1.3335 8.33325 1.3335H7.6666C6.93125 1.3335 6.33325 1.93146 6.33325 2.66684V3.00018C6.33325 3.18443 6.48235 3.33353 6.6666 3.33353H7.33325V4.04168C4.4415 4.38106 2.16997 6.8984 2.01594 10.0002H1.6666C1.48235 10.0002 1.33325 10.1493 1.33325 10.3335C1.33328 10.5178 1.48238 10.6668 1.6666 10.6668ZM3.97619 7.83775C4.81116 6.34134 6.35316 5.41196 7.99994 5.41196C8.18419 5.41196 8.33328 5.56106 8.33328 5.74531C8.33328 5.92956 8.18419 6.07862 7.99994 6.07862C6.59435 6.07862 5.27566 6.87712 4.55822 8.16262C4.49735 8.272 4.38375 8.33353 4.26688 8.33353C4.21188 8.33353 4.15619 8.31984 4.10475 8.29121C3.94394 8.20168 3.88635 7.99856 3.97619 7.83775Z"
            fill="#667587"
          />
          <path
            d="M14.6667 12.0002V11.6668C14.6667 11.4826 14.5176 11.3335 14.3333 11.3335H1.66666C1.48241 11.3335 1.33331 11.4826 1.33331 11.6668V12.0002C0.597969 12.0002 0 12.5982 0 13.3335V14.3335C0 14.5178 0.149094 14.6669 0.333344 14.6669H15.6667C15.8509 14.6669 16 14.5178 16 14.3335V13.3335C16 12.5982 15.402 12.0002 14.6667 12.0002Z"
            fill="#667587"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

export default Bell;