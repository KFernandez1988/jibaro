import * as React from "react";

function Icon(props) {
  return (
    <svg width={34} height={36} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M28.589 27.675a1 1 0 000-1.71l-16.683-10.11a1 1 0 010-1.71L28.59 4.035a1 1 0 000-1.71L25.27.315a1 1 0 00-1.037 0L1.411 14.144a1 1 0 000 1.71l22.823 13.83a1 1 0 001.037 0l3.318-2.01z"
          fill="#34463E"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0.93}
          y={0.169}
          width={32.141}
          height={35.661}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={2} dy={4} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0.203922 0 0 0 0 0.27451 0 0 0 0 0.243137 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;