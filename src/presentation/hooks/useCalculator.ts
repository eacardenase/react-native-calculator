import { useEffect, useRef, useState } from 'react';

export enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operator>(null);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);

      setFormula(
        `${firstFormulaPart} ${lastOperation.current} ${
          number === '0' ? '' : number
        }`,
      );
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();

    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    setFormula('0');
    lastOperation.current = null;
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
    calculateResult();

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
    let result = calculateSubResult();

    setFormula(`${result}`);
    setPreviousNumber('0');

    lastOperation.current = null;
  };

  const calculateSubResult = (): number => {
    const [firstValue, secondValue] = formula.split(
      ` ${lastOperation.current} `,
    );
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (lastOperation.current) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not supported.');
    }
  };

  return {
    number,
    previousNumber,
    formula,
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
