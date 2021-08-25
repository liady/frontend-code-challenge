import { createStore as createReduxStore } from 'redux';
import { middleware } from './middlewares';
import { reducers } from './reducers';

export function createStore() {
    return createReduxStore(
        reducers(),
        middleware(),
    );
}

export const store = createStore();
