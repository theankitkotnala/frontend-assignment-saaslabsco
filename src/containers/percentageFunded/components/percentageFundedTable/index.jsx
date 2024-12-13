import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody } from "../../../../components";
import { PERCENTAGE_FUNDED_TABLE_HEADERS } from "../../../../util/constant";
import { getPaginatedData } from "../../../../util";
import "./style.css";

/**
 * This is a constant for the pagination limit
 */
const PERCENTAGE_FUNDED_TABLE_PAGINATION_LIMIT = 5;

const PercentageFundedTable = (props) => {
    const [paginatedData, setPaginatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loader } = props;

    useEffect(() => {
        setPaginatedData(getPaginatedData(data, currentPage, PERCENTAGE_FUNDED_TABLE_PAGINATION_LIMIT));
    }, [data, currentPage]);

    return <Table 
            border={1}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            colSpan={PERCENTAGE_FUNDED_TABLE_HEADERS.length}
            dataLength={data.length}
            pageSize={PERCENTAGE_FUNDED_TABLE_PAGINATION_LIMIT}
            loading={loader}
        >
        <Thead headers={PERCENTAGE_FUNDED_TABLE_HEADERS} />
        <Tbody 
            empty={loader === false && data.length === 0} 
            colSpan={PERCENTAGE_FUNDED_TABLE_HEADERS.length} 
            loading={loader}>
                {paginatedData.map((item, index) => (
                    <tr key={index}>
                        <td>{item['s.no']}</td>
                        <td>{item['percentage.funded']}</td>
                        <td>{item['amt.pledged']}</td> 
                    </tr>
                ))}
        </Tbody>
    </Table>;
};

export default PercentageFundedTable;