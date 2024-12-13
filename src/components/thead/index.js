import React from "react";
import './../table/style.css';

const THead = (props) => {
  return (
    <thead className="common__table--head">
      <tr>
        {props.headers.map((head, idx) => (
          <th key={`${idx}@${head.label}`}>{head.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(THead);
