import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middleware = () =>
    compose(
        applyMiddleware(
            thunk,
        ),
    );

export { middleware };
