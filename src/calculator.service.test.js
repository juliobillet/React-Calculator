import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from './calculator.service';

describe('Test CalculatorService', () => {

    const [calculate, concat_numbers, SUM, SUBTRACT, MULTIPLY, DIVIDE] = CalculatorService();

    it('deve garantir que 1 + 4 seja igual a 5', () => {
        let sum = calculate(1, 4, SUM);
        expect(sum).toEqual(5);
    });

    it('deve garantir que 5 - 1 seja igual a 4', () => {
        let subtract = calculate(5, 1, SUBTRACT);
        expect(subtract).toEqual(4);
    });

    it('deve garantir que 1 * 4 seja igual a 4', () => {
        let multiply = calculate(1, 4, MULTIPLY);
        expect(multiply).toEqual(4);
    });

    it('deve garantir que 4 / 2 seja igual a 2', () => {
        let divide = calculate(4, 2, DIVIDE);
        expect(divide).toEqual(2);
    });

    it('deve retornar 0 para operação inválida', () => {
        let invalid_op = calculate(4, 2, '%');
        expect(invalid_op).toEqual(0);
    });

});
