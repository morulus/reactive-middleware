import { ACTION_ASSIGN_STATE } from './constants.js';
/**
 * actionAssignState - Force update provider state
 *
 * @param {object} state Object to assign
 */
export function actionAssignState(state) {
  return {
    type: ACTION_ASSIGN_STATE,
    state: state
  }
}
