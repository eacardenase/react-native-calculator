import { useRef, useState } from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operator>(null);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const deleteOperation = () => {
    if (
      number.length === 1 ||
      (number.length === 2 && number.startsWith('-'))
    ) {
      return clean();
    }

    setNumber(number.slice(0, -1));
  };

  const toggleSign = () => {
    if (number.startsWith('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        if (number.startsWith('-')) {
          return setNumber('-' + numberString);
        }

        return setNumber(numberString);
      }

      //
      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(number + numberString);
    }

    return setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const addOperation = () => {
    setLastNumber();

    lastOperation.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();

    lastOperation.current = Operator.subtract;
  };

  const multiplyOperation = () => {
    setLastNumber();

    lastOperation.current = Operator.multiply;
  };

  const divideOperation = () => {
    setLastNumber();

    lastOperation.current = Operator.divide;
  };

  const calculateResult = () => {
    const value1 = Number(number);
    const value2 = Number(previousNumber);

    setPreviousNumber('0');

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${value1 + value2}`);

        break;
      case Operator.subtract:
        setNumber(`${value2 - value1}`);

        break;
      case Operator.multiply:
        setNumber(`${value1 * value2}`);

        break;
      case Operator.divide:
        setNumber(`${value2 / value1}`);

        break;
      default:
        throw new Error('Operation not supported.');
    }
  };

  return {
    number,
    previousNumber,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  };
};
