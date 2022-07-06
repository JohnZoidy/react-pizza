import ReactDOM from 'react-dom/client';

import runApp from './main';
import '../assets/app.scss';

const run = () => {
  const app = runApp();
  ReactDOM.createRoot(document.getElementById('content') as HTMLElement).render(app);
};

run();
