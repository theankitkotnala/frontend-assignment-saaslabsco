import React from "react";
import "./../table/style.css";
import loaderIcon from "../../assets/images/loaderIcon.gif";


const TBody = (props) => {
  const { loader, empty, children, colSpan } = props;
  // adding td values statically here to save time ;) -  as this common folder is for having unit component in one place
  return (
    <tbody className="common__table--body">
      {loader &&  <tr className="percentage-funded__table--loader">
                <td colSpan={colSpan}>
                    <img src={loaderIcon} alt="loader" height={30} width={30}/>
                </td>
            </tr>}
      {!loader && !empty && children}
      {empty && <tr><td colSpan={colSpan} className="common__table--empty">No data found</td></tr>}
    </tbody>
  );
};

export default TBody;
