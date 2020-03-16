import {ChangeNameAction} from '../actions/actionTypes';
import {State} from '../State';

const initStore: State = {
  name: 'aaa'
}

export default function reducers(state = initStore, action: ChangeNameAction): State {
  console.log("### reducers", {state, action})
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}
