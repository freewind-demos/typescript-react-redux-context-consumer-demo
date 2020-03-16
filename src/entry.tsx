import Hello from './components/hello';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Hello/>
    </Provider>,
    document.body
  );
}

render();

store.subscribe(render);

