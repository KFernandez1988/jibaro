import * as React from "react";

function Icon(props) {
  return (
    <svg style={styles} width={25} height={25} fill="none" {...props}>
      <path
        d="M12.5 0a12.5 12.5 0 100 25 12.5 12.5 0 000-25zm0 4.464a4.018 4.018 0 11-4.018 4.018A4.009 4.009 0 0112.5 4.464zm7.143 16a10.652 10.652 0 01-14.286 0v-.518a4.643 4.643 0 014.464-4.767h5.358a4.652 4.652 0 014.464 4.74v.545z"
        fill="#34463E"
      />
    </svg>
  );
}
const styles = {
    margin: '0',
    padding: '0'
}

export default Icon;