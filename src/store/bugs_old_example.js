// DUCKS PATTERN - All in one file
import { createAction, createReducer } from '@reduxjs/toolkit';

// Action Types
// No longer needed, wrapped in the createAction function
// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';

// Actions Creators
export const bugAdded = createAction("bugAdded");       // returns a function
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");
// export const bugResolved = id => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id
//   }
// })

// Reducer
let lastId = 0;

export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    });
  },

  [bugRemoved.type]: (bugs, action) => {
    // bugs.
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id)
    bugs[index].resolved = true;
  }
});

// Classic way
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//             ...state,
//             {
//               id: ++lastId,
//               description: action.payload.description,
//               resolved: false
//             }
//           ];
//     case bugRemoved.type:
//       return state.filter(bug => bug.id !== action.payload.id);
//     case bugResolved.type:
//       return state.map(bug =>
//         bug.id !== action.payload.id ? bug : {...bug, resolved: true });
//     default:
//       return state;
//   }
// }