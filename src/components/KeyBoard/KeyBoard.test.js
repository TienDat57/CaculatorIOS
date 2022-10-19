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

      expect(screen.queryByTestId('answer')).toHaveValue('8');
   });

});
