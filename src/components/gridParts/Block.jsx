import React from 'react';
import insightsMetaData from '../../store/mobx/Insights';
import styles from './Block.module.scss';
import {
    getColorFromSeverity,
    getLengthAndOffset,
} from '../../services/eventsService';
import { observer } from 'mobx-react-lite';

export default observer(function Block({ className, insightId, eventData }) {
    const severity = insightsMetaData.getInsightSeverity(insightId);
    const color = getColorFromSeverity(severity);
    const { length, offset } = getLengthAndOffset(eventData);
    const style = {
        width: `${length * 100}%`,
        transform: `translate(${offset * 100}%, -45%)`,
        backgroundColor: color,
    };
    return <div className={styles.main} style={style} />;
});
