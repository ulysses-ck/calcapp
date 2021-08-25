import React from "react";
import PropTypes from "prop-types";
import "./Result.css";

const Result = ({ operation, calculo }) => {
    return (
        <div className="card mx-auto tex-center my-2">
            <br />
            <span className="card-title">
                {operation}: {calculo}
            </span>
        </div>
    );
};

Result.propTypes = {
    operation: PropTypes.string,
    calculo: PropTypes.number,
};

export default Result;
