import './App.css';
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleExpression = (number) => {
    setCurrentNumber(prev => `${prev === '0'? '':prev}${number}`);
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleEval = () => {
    setCurrentNumber(String(eval(currentNumber)));
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleExpression('*')} />
          <Button label="/" onClick={() => handleExpression('/')} />
          <Button label="0" onClick={() => handleExpression('0')} />
          <Button label="C" onClick={() => handleOnClear()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleExpression('7')} />
          <Button label="8" onClick={() => handleExpression('8')} />
          <Button label="9" onClick={() => handleExpression('9')} />
          <Button label="-" onClick={() => handleExpression('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleExpression('4')} />
          <Button label="5" onClick={() => handleExpression('5')} />
          <Button label="6" onClick={() => handleExpression('6')} />
          <Button label="+" onClick={() => handleExpression('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleExpression('1')} />
          <Button label="2" onClick={() => handleExpression('2')} />
          <Button label="3" onClick={() => handleExpression('3')} />
          <Button label="=" onClick={() => handleEval()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
