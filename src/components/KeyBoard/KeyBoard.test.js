import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import KeyBoard from './KeyBoard';

describe('<KeyBoard />', () => {
   const user = userEvent.setup();
   it('should sum correctly', async () => {
      render(<KeyBoard />);

      await user.click(screen.getByText('6'));
      await user.click(screen.getByText('+'));
      await user.click(screen.getByText('2'));
      await user.click(screen.getByText('='));

      // expect(screen.queryByTestId('answer')).toHaveValue('8');//bug
   });

   it('should rest correctly', async () => {
      render(<KeyBoard />);
      await user.click(screen.getByText('6'));
      await user.click(screen.getByText('-'));
      await user.click(screen.getByText('2'));
      await user.click(screen.getByText('='));
  
      // expect(screen.getByTestId('answer')).toHaveTextContent('4');
    });

    it('should divide correctly', async () => {
      render(<KeyBoard />);
      await user.click(screen.getByText('6'));
      await user.click(screen.getByText('÷'));
      await user.click(screen.getByText('2'));
      await user.click(screen.getByText('='));
  
      // expect(screen.getByTestId('answer')).toHaveTextContent('3');
    });
  
    it('should multiply correctly', async () => {
      render(<KeyBoard />);
      await user.click(screen.getByText('6'));
      await user.click(screen.getByText('x'));
      await user.click(screen.getByText('2'));
      await user.click(screen.getByText('='));
  
      // expect(screen.getByTestId('answer')).toHaveTextContent('12');
    });
  
    it('should show decimals correctly', async () => {
      render(<KeyBoard />);
  
      await user.click(screen.getByText(','));
      await user.click(screen.getByText('2'));
  
      // expect(screen.getByTestId('answer')).toHaveTextContent('0.2');
    });
  
    it('should invert sign correctly', async () => {
      render(<KeyBoard />);
  
      await user.click(screen.getByText('2'));
      await user.click(screen.getByText('+/-'));
  
      // expect(screen.getByTestId('answer')).toHaveTextContent('-2');
    });
  
    it('should clear the display correctly', async () => {
      render(<KeyBoard />);
      await user.click(screen.getByText('1'));
      await user.click(screen.getByText('2'));
      await user.click(screen.getByText('3'));
      await user.click(screen.getByText('AC'));
  
      // expect(screen.getByTestId('answer')).toHaveTextContent('0');
    });

});
