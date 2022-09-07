import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../../src/App';

// https://testing-library.com/docs/example-react-router
export const renderWithRouter = (route = '/') => {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    ),
  };
};
