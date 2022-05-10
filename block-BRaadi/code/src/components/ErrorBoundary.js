import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    console.log(this.state.children, "children");
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
