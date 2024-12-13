import React from "react";
import './style.css';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../button";

const Table = ({ children, ...props }) => {
    const { currentPage, setCurrentPage, colSpan, dataLength, pageSize, loading } = props;
    return (
        <table className="common__table" {...props}>
            {children}
            <tfoot>
            <tr>
                <td colSpan={colSpan} className="common__table--pagination">
                    <div className="common__table--pagination--buttons">
                        <Button 
                            onClick={() => setCurrentPage(currentPage - 1)} 
                            disabled={currentPage === 1 || loading}
                            variant="ghost"
                            size="sm"
                        >
                            <ArrowLeft size={16} />
                            Previous
                        </Button>
                        {currentPage}
                        <Button 
                            onClick={() => setCurrentPage(currentPage + 1)} 
                            disabled={currentPage === Math.ceil(dataLength / pageSize) || loading}
                            variant="ghost"
                            size="sm"
                        >
                            Next
                            <ArrowRight size={16} />
                        </Button>
                    </div>
                </td>
            </tr>
        </tfoot>  
        </table>
    )
}

export default Table;