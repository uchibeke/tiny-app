import React from 'react';
import App from '../pages/index';
import { render } from '@testing-library/react';

describe('With Enzyme', () => {
  it('App shows "Tiny App" in a <p> tag', () => {
    const { getByText } = render(<App users={[]} />);
    const welcome = getByText('Tiny App');
    expect(welcome).toBeDefined();
  });
  it('App shows "User" in a <tr> tag', () => {
    const { findAllByText } = render(
      <App users={[{ firstName: 'Uchi', id: '1' }]} />,
    );
    const user = findAllByText(`Uchi</tr>`);
    expect(user).toBeDefined();
  });
});
