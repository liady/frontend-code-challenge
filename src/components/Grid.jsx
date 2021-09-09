import React from 'react';
import cx from 'classnames';
import styles from './Grid.module.scss';
import { observer } from 'mobx-react-lite';
import eventsState from '../store/mobx/Events';
import LocationTimeCell from './gridParts/LocationTimeCell';
import { getHoursToShow } from '../services/eventsService';
import LocationDescription from './gridParts/LocationDescription';

export default observer(function Grid({ className }) {
    return (
        <div className={cx(className, styles.main)}>
            <HeaderRow />
            {eventsState.getLocationIds().map((locationId) => (
                <SingleLocationRow key={locationId} locationId={locationId} />
            ))}
        </div>
    );
});

function HeaderRow() {
    return (
        <>
            <div className={styles.empty}></div>
            {getHoursToShow().map((dateObject) => (
                <div className={styles.hourHeader}>{`${dateObject.getDate()}/${
                    dateObject.getMonth() + 1
                } ${dateObject.getHours()}:00`}</div>
            ))}
        </>
    );
}

function SingleLocationRow({ locationId }) {
    return (
        <>
            <LocationDescription locationId={locationId} />
            {getHoursToShow().map((startTime) => (
                <LocationTimeCell
                    key={startTime}
                    locationId={locationId}
                    startTime={startTime}
                />
            ))}
        </>
    );
}
