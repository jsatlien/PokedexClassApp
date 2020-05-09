import React from "react";

export default function PaginationButtons ({handlePageChange}) {
    
    return (
        <div>
            <button onClick={() => handlePageChange("next")} type="button">Next Page</button>
            <br/>
            <button onClick={() => handlePageChange("previous")} type="button">Previous Page</button>
        </div>
    )
}