import { render } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import { App } from '../../src/App';

// https://testing-library.com/docs/example-reach-router
export const renderWithRouterWrapper = ({
  route = '/',
  history = createHistory(createMemorySource(route)),
} = {}) => {
  return render(
    <LocationProvider history={history}>
      <App />
    </LocationProvider>,
  );
};
