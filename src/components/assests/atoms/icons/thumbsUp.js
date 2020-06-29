import * as React from "react";

function Icon(props) {
  return (
    <svg width={21} height={20} fill="none" {...props}>
      <path
        d="M4.787 20H.103v-9h1.993l2.691 9zM18.043 7h-5.98V3c0-.796-.315-1.559-.876-2.121A2.985 2.985 0 009.073 0h-.997v4l-2.89 3.625A5.03 5.03 0 004.09 10.76V12l2.093 7h8.309c.89 0 1.752-.298 2.453-.847a4 4 0 001.414-2.183l1.617-6.485a2.005 2.005 0 00-1.06-2.282A1.988 1.988 0 0018.044 7z"
        fill="#F6FFF8"
      />
    </svg>
  );
}

export default Icon;