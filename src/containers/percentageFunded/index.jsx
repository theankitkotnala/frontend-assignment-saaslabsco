import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Button } from "../../components";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { getPercentageFundedData } from "../../redux/actions/percentageFunded";
import PercentageFundedTable from "./components/percentageFundedTable";

/**
 * This is the container for the percentage funded page
 */
const PercentageFunded = () => {
    const dispatch = useDispatch();

    const { percentageFundedData, requestLoader: percentageFundedRequestLoader } = useSelector(state => state.percentageFundedReducer);

    useEffect(() => {
        dispatch(getPercentageFundedData());
    }, [dispatch]);

    return <div>
      <Header />
      <div className="percentage-funded__subheader">
        <Link to="/" className="btn-link">
          <Button className="btn-link" size="sm" variant="ghost">
            <ArrowLeft size={16} />
            Go to Home
          </Button>
        </Link>
      </div>
      <div className="percentage-funded__table">
        <PercentageFundedTable 
            data={percentageFundedData || []} 
            loader={percentageFundedRequestLoader}/>
      </div>
    </div>;
};

export default PercentageFunded;
