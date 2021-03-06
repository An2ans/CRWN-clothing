import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor(){
    super();

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error){

    return { hasError: true };
  }

  componentDidCatch(error, info){
    console.log(error);
  }

  render(){
    if(this.state.hasError){
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/qIufhof.png"} />
          <ErrorImageText>Sorry, this page is not responding. <br/> Please try again later. </ErrorImageText>
        </ErrorImageOverlay>

      )
    }else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
