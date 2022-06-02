import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createBrowserHistory } from 'history';
import { vendorsReducer } from 'plugins';

const persistConfig = {
  key: 'root',
  storage
};

export const history = createBrowserHistory();

const createRootReducer =combineReducers({
  vendorsState: vendorsReducer,
});

export type RootState = ReturnType<typeof createRootReducer>;

export default persistReducer(persistConfig, createRootReducer);
