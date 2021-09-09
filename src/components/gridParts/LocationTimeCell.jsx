import React from 'react';
import styles from './LocationTimeCell.module.scss';
import eventsState from '../../store/mobx/Events';
import Block from './Block';
import Line from './Line';
import { isInsideHour } from '../../services/eventsService';

export default function LocationTimeCell({ locationId, startTime }) {
    const locationData = eventsState.getLocationData(locationId);
    return (
        <div className={styles.locationTimeCell}>
            <Line />
            {locationData.getInsightsIds().map((insightId) => (
                <Line key={insightId}>
                    <Events
                        startTime={startTime}
                        insightId={insightId}
                        events={locationData.getEventsPerInsight(insightId)}
                    />
                </Line>
            ))}
        </div>
    );
}

function Events({ events, startTime, insightId }) {
    return events
        .filter((eventData) => isInsideHour(eventData, startTime))
        .map((eventData) => (
            <Block insightId={insightId} eventData={eventData} />
        ));
}
