import { Component, type ReactNode, type ErrorInfo } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // React calls this when a child throws an error or we can update in componentDidCatch() 
  //   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
  //     return { hasError: true, error };
  //   }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true, error });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", padding: "10px" }}>
          <h1>An error occurred.</h1>
          <p>{this.state.error?.message ?? "Please try again."}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
