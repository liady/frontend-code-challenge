import React from 'react';
import styles from './LocationDescription.module.scss';
import { observer } from 'mobx-react-lite';
import eventsState from '../../store/mobx/Events';
import locationsMetaData from '../../store/mobx/Locations';
import insightsMetaData from '../../store/mobx/Insights';
import Line from './Line';

export default observer(function LocationDescription({ locationId }) {
    const insightsIds = eventsState
        .getLocationData(locationId)
        .getInsightsIds();
    return (
        <div className={styles.locationText}>
            <Line className={styles.header}>
                {locationsMetaData.getLocationName(locationId)}
            </Line>
            {insightsIds.map((insightId) => (
                <Line key={insightId}>
                    {insightsMetaData.getInsightText(insightId)}
                </Line>
            ))}
        </div>
    );
});
