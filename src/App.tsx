import './global.css';
import { Router } from './router/index';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
