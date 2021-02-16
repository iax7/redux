import configureStore from './store/configureStore';
import { loadBugs, addBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

// UI
store.dispatch(loadBugs());
store.dispatch(addBug({ description: "nuevo!" }));

setTimeout(() => store.dispatch(assignBugToUser(1, 5), 2000));
