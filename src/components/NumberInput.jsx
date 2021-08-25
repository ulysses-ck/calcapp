import React, { useState } from "react";
import PropTypes from "prop-types";

import Result from "./Result";
import { operations } from "../helpers/operations";

import "./NumberInput.css";

const NumberInput = ({ name }) => {
    const [numbers, setNumbers] = useState({
        numberOne: 10,
        numberTwo: 5,
    });

    const {
        handleChange,
        sum,
        difference,
        multiply,
        division,
        numberOne,
        numberTwo,
    } = operations(numbers, setNumbers);

    return (
        <div className="form-group">
            <div className="input-group mb-3">
                <span className="input-group-text">First Number</span>
                <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    name="numberOne"
                    value={numberOne}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Second Number</span>
                <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    name="numberTwo"
                    value={numberTwo}
                    onChange={handleChange}
                />
            </div>

            <Result operation="Sum" calculo={sum()} />
            <Result operation="Difference" calculo={difference()} />
            <Result operation="Multiply" calculo={multiply()} />
            <Result operation="Division" calculo={division()} />
        </div>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string,
};

export default NumberInput;
