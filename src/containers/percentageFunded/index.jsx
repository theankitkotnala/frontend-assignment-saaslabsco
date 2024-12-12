import React from "react";
import { useSelector } from "react-redux";

const PercentageFunded = () => {
    const { percentageFundedData } = useSelector(state => state.percentageFundedReducer);
    console.log(percentageFundedData);
    return <div>PercentageFunded</div>;
};

export default PercentageFunded;
