import { connect } from 'react-redux';
import { App as PresentationalComponent } from './app';
import { isAppReady } from '../store/selectors';

function mapStateToProps(state) {
    return {
        isReady: isAppReady(state),
    };
}

export const App = connect(mapStateToProps)(PresentationalComponent);
