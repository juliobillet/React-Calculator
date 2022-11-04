import { useState } from 'react';
import './calculator.css';
import { 
  Container, Row, Col, Button, Form
} from 'react-bootstrap';
import React from 'react';
import CalculatorService from './calculator.service';

function Calculator() {

  const [calculate, concat_numbers, SUM, SUBTRACT, MULTIPLY, DIVIDE] = CalculatorService();

  const [txt_numbers, set_txt_numbers] = useState('0');
  const [number1, set_number1] = useState('0');
  const [number2, set_number2] = useState(null);
  const [operation, set_operation] = useState(null);
  const [run_calculate_loop, set_run_calculate_loop] = useState(false);

  // Clear Textbox text and replace with 0
  function  clear()  {
    set_txt_numbers('0');
    set_number1('0');
    set_number2(null);
    set_operation(null);
    set_run_calculate_loop(false);
  }

  // add number function
  function  add_number(nb)  {
    let result;
    if (operation === null) {
      result = concat_numbers(number1, nb);
      set_number1(result);
    } else {
      result = concat_numbers(number2, nb);
      set_number2(result);
    }
    set_txt_numbers(result);
  }

  // Define operations to be used to calculate
  function  define_operation(op)  {
    // only define operation only if it does not exist
    if (operation === null) {
      set_operation(op);
      return;
    }
    // if operation is defined and number 2 is not null, execute the operation
    if (number2 !== null && run_calculate_loop === false) {
      const result = calculate(+number1, +number2, operation);
      set_operation(op);
      set_number1(result.toString());
      set_number2(null);
      set_txt_numbers(result.toString());
    } else {
      set_number2(null);
      set_operation(op);
      set_run_calculate_loop(false);
    }
  }

  // the action of the = button to calculate
  function  run_calculate() {
    if (number2 === null) {
      return;
    }
    const result = calculate(+number1, +number2, operation);
    set_number1(result.toString());
    set_txt_numbers(result.toString());
    set_run_calculate_loop(true);
  }

  // return the rendering
  return (
    <div className='jumbotron' style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        {/* First Row with: C button and textbox */}
        <Row>
          <Col xs='3'>
            <Button variant='danger'
              onClick={clear}>C
            </Button>
          </Col>
          <Col xs='9'>
            <Form.Control 
            type='text'
            name='txt_numbers'
            className='text-end'
            readOnly='readonly'
            value={txt_numbers}
            data-testid='txt_numbers' />
          </Col>
        </Row>
        {/* Second Row with: '7', '8', '9' and '/' buttons */}
        <Row>
          <Col>
            <Button variant='light'
              onClick={() => add_number('7')}>7
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('8')}>8
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('9')}>9
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => define_operation(DIVIDE)}>/
            </Button>
          </Col>
        </Row>
        {/* Second Row with: '4', '5', '6' and '*' buttons */}
        <Row>
          <Col>
            <Button variant='light'
              onClick={() => add_number('4')}>4
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('5')}>5
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('6')}>6
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => define_operation(MULTIPLY)}>*
            </Button>
          </Col>
        </Row>
        {/* Second Row with: '1', '2', '3' and '-' buttons */}
        <Row>
          <Col>
            <Button variant='light'
              onClick={() => add_number('1')}>1
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('2')}>2
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('3')}>3
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => define_operation(SUBTRACT)}>-
            </Button>
          </Col>
        </Row>
        {/* Second Row with: '0', '.', '=' and '+' buttons */}
        <Row>
          <Col>
            <Button variant='light'
              onClick={() => add_number('0')}>0
            </Button>
          </Col>
          <Col>
            <Button variant='light'
              onClick={() => add_number('.')}>.
            </Button>
          </Col>
          <Col>
            <Button variant='success'
              onClick={run_calculate}>=
            </Button>
          </Col>
          <Col>
            <Button variant='warning'
              onClick={() => define_operation(SUM)}>+
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;
