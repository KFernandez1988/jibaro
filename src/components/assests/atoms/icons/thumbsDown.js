import * as React from "react";

function Icon(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M4.7 0H0v9h2l2.7-9zm13.301 13h-6v4a3 3 0 01-3 3H8v-4l-2.9-3.625A5.02 5.02 0 014 9.24V8l2.1-7h8.337a4 4 0 013.88 3.03l1.622 6.485A2 2 0 0118.001 13z"
        fill="#F6FFF8"
      />
    </svg>
  );
}

export default Icon;