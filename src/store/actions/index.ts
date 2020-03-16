import {ChangeNameAction} from './actionTypes';

export function changeNameAction(name: string): ChangeNameAction {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}
