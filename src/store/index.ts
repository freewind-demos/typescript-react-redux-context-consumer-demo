import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("### store",store);
export default store;
