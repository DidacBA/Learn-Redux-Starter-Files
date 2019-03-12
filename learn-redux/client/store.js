import { createStore, compse } from 'redux';
import { synchHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data

const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);

export const history = synchHistoryWithStore(browserHistory, store);

export default store;