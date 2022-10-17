import React, { useState } from 'react';
import Button from '~/components/Button';
import Display from '~/components/Display';
import Header from '~/components/Header';

function Calculator() {
   const [input, setInput] = useState("");
   const [answer, setAnswer] = useState("");

   return (
      <div className="Calculator">
         <Header />
         <Display input={input} setInput={setInput} answer={answer} />
         <Button isNumber>+</Button>
      </div>
   );
}

export default Calculator;
