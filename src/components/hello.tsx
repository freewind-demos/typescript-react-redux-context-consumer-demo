import React from 'react';
import {ReactReduxContext} from 'react-redux';
import {changeNameAction} from '../store/actions';

export default function Hello() {
  return <ReactReduxContext.Consumer>
    {({store}) => {
      return <div>
        <ul>
          <input value={store.getState().name} onChange={(e) => store.dispatch(changeNameAction(e.target.value))}/>
          <div>{JSON.stringify(store.getState())}</div>
        </ul>
        <button onClick={()=> store.dispatch(changeNameAction('DDD'))}>Click</button>
      </div>
    }}
  </ReactReduxContext.Consumer>
}

