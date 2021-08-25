import Box from '@material-ui/core/Box';
import styles from './app.module.scss';

function App({ isReady }) {
  return (
    <Box className={styles.root}>
        <h1>Frontend Code challenge</h1>

        {
            isReady && <p>State is connected !!</p>
        }
    </Box>
  );
}

export { App };
