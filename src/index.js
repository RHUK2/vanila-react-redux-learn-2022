import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'components/App';

ReactDOM.render(
  // store를 나머지 컴포넌트에서 사용할 수 있게함
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
