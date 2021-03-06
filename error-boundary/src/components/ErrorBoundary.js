import React from 'react';

class ErrorBoudary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <h2>Wrong data</h2>
        } else {
            return this.props.children
        }

    }
}
export default ErrorBoudary;