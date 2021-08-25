export const operations = (numbers, setNumbers) => {
    const { numberOne, numberTwo } = numbers;

    const handleChange = (e) => {
        setNumbers({
            ...numbers,
            [e.target.name]: parseFloat(e.target.value),
        });
    };
    const sum = () => numberOne + numberTwo;
    const difference = () => numberOne - numberTwo;
    const multiply = () => numberOne * numberTwo;
    const division = () => numberOne / numberTwo;

    return {
        handleChange,
        sum,
        difference,
        multiply,
        division,
        numberOne,
        numberTwo,
    };
};
