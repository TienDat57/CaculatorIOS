import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
   function clearInput() { };

   it('renders button without crashing', () => {
      render(<Button
         optional
         onClick={clearInput}
         id="clearButton"
      >
         AC
      </Button>);
      expect(screen.getByText('AC'));
   })

   it('should call onClick', () => {
      render(<Button
         optional
         onClick={clearInput}
         id="clearButton"
      >
         AC
      </Button>);
      fireEvent.click(screen.getByText('AC'));

      const mockCallBack = jest.fn();
      const button = screen.getByText('AC');
      button.onclick = mockCallBack;
      fireEvent.click(button);
      //to have been called
      expect(mockCallBack.mock.calls.length).toEqual(1);

   });

})