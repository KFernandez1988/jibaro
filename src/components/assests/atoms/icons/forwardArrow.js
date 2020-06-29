import * as React from "react";

function Icon(props) {
  return (
    <svg width={34} height={36} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M1.411 2.325a1 1 0 000 1.71l16.683 10.11a1 1 0 010 1.71L1.41 25.965a1 1 0 000 1.71l3.318 2.01a1 1 0 001.037 0l22.823-13.83a1 1 0 000-1.71L5.766.315a1 1 0 00-1.037 0l-3.318 2.01z"
          fill="#F6FFF8"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0.929}
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
          <feColorMatrix values="0 0 0 0 0.203922 0 0 0 0 0.27451 0 0 0 0 0.243137 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;