import React from 'react';
import cx from 'classnames';
import styles from './Line.module.scss';

export default function Line({ className, children }) {
    return <div className={cx(className, styles.main)}> {children}</div>;
}
