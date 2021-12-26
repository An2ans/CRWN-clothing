import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ?  <Spinner /> : <WrappedComponent {...otherProps} />;
};


//Pasamos el el componente y pasamos isloading, si es true pasamos el spinner components, si es false pasamos el wrapped component con las otras props//
export default WithSpinner;
