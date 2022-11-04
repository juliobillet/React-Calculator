function    CalculatorService() {

    const   SUM = '+';
    const   SUBTRACT = '-';
    const   MULTIPLY = '*';
    const   DIVIDE = '/';

    function    calculate(nb1, nb2, operation)  {
        let result;

        switch(operation) {
            case SUM:
                result = nb1 + nb2;
                break;
            case SUBTRACT:
                result = nb1 - nb2;
                break;
            case MULTIPLY:
                result = nb1 * nb2;
                break;
            case DIVIDE:
                result = nb1 / nb2;
                break;
            default:
                result = 0;
        }

        return (result);
    }

    function    concat_numbers(current_number, concat_number)    {
        // check if the current number is null
        if (current_number === null) {
            current_number = '0';
        }
        // if the current number is 0 and the concat number is not a point, return the concat number
        if (current_number === '0' && concat_number !== '.') {
            return (concat_number);
        }
        // check if there is another point in the current number, if so, just return the current number
        if (concat_number === '.' && current_number.indexOf('.') > -1) {
            return (current_number);
        }
        return (current_number + concat_number);
    }

    return [
        calculate,
        concat_numbers,
        SUM,
        SUBTRACT,
        MULTIPLY,
        DIVIDE
    ];

}

export default CalculatorService;
