import { Component } from "react";

import Menu from "./Menu";

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
        return <Menu/>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary