import { Component } from "react";
import Fallback from "./Fallback";
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  

  
    render() {
      if (this.state.hasError) {
        return <Fallback/>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary