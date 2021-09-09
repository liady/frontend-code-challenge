import React, { useCallback, useEffect } from 'react';
import cx from 'classnames';
import styles from './Dashboard.module.scss';
import Button from '@material-ui/core/Button';
import Grid from './Grid';
import { refreshData } from '../services/dataService';

export default function Dashboard({ className }) {
    const refresh = useCallback(() => {
        refreshData();
    }, []);
    useEffect(() => refresh(), [refresh]);
    return (
        <div className={cx(className, styles.main)}>
            <div className={styles.title}>Insights Dashboard</div>
            <div className={styles.body}>
                <Button
                    color='primary'
                    variant='contained'
                    className={styles.refresh}
                    onClick={refresh}
                >
                    Refresh
                </Button>
                <Grid />
            </div>
        </div>
    );
}
