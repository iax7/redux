// Curring (store, next, action) -> store => next => action
// SNA (Store, Next, Action)
// some use: ({ getState, dispatch }) => next => action =>
const logger = store => next => action => {
  console.log("store", store);
  console.log("next", next);
  console.log("action", action);
  next(action);
};

export default logger;