import Box from '@material-ui/core/Box';
import styles from './app.module.scss';
import Dashboard from './Dashboard';

function App({ isReady }) {
  return (
    <Box className={styles.root}>
        <Dashboard />
    </Box>
  );
}

export { App };
