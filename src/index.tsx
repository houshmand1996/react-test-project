import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App, store } from './core';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
