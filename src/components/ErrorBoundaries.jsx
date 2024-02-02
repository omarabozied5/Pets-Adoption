import { Component } from 'react';

class ErrorBoundaries extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError() {
    //update state so the next render show fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // call reporting service -> Track.Js , Sentry.
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
