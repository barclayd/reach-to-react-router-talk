import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouterWrapper } from './utils';

it('can render multiple routes', () => {
  renderWithRouterWrapper({ route: '/' });

  expect(screen.getByRole('heading', { name: 'Welcome' })).toBeVisible();

  fireEvent.click(screen.getByRole('link', { name: 'Invoices' }));

  expect(screen.getByRole('heading', { name: 'Invoices' })).toBeVisible();
});
