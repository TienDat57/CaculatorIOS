import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Display from './Display';

describe('<Display />', () => {
   const input = '0';
   const setInput = jest.fn();
   const inputShow = '0';
   const setInputShow = jest.fn();
   const answer = '0';

   it('should render', () => {
      render(<Display input={input} setInput={setInput} inputShow={inputShow} setInputShow={setInputShow} answer={answer} />);
   });
});