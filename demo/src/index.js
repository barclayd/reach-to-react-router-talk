import * as ReactDOM from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Missing container - unable to createRoot to elementWithId=root',
  );
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
