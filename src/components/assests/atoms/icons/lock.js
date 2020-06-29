import * as React from "react";

function Icon(props) {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <path
        d="M12.5 0C7.917 0 4.167 3.214 4.167 7.143v3.071a.5.5 0 01-.5.5H.5a.5.5 0 00-.5.5V24.5a.5.5 0 00.5.5h24a.5.5 0 00.5-.5V11.214a.5.5 0 00-.5-.5h-3.167a.5.5 0 01-.5-.5V7.143C20.833 3.214 17.083 0 12.5 0zm0 3.571c2.333 0 4.167 1.572 4.167 3.572v3.071a.5.5 0 01-.5.5H8.833a.5.5 0 01-.5-.5V7.143c0-2 1.834-3.572 4.167-3.572z"
        fill="#34463E"
      />
    </svg>
  );
}

export default Icon;