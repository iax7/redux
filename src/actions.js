import * as actions from './actionTypes';

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    // description: description
    description
  }
})

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description
//     }
//   };
// }

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id
  }
})