import React from 'react';
import Sentry from 'sentry-expo';

export default class SentryBoundary extends React.Component {

    componentDidCatch = (error) => {
        Sentry.captureException(error);
    }

    render() {
        return this.props.children;
    }
}