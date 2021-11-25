import React from "react";

import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};


//Pasamos el el componente y pasamos isloading, si es true pasamos el spinner components, si es false pasamos el wrapped component con las otras props//
export default WithSpinner;
