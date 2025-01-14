import React, { useState } from "react";
import Error404 from "../Components/Error/Error";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, info) => {
    setHasError(true);
    // You can also log the error to an error reporting service
    console.error(error, info);
  };

  if (hasError) {
    // Render the fallback UI
    return <Error404 />; // Assuming NotFoundPage is your 404 page component
  }

  return children;
}

export default ErrorBoundary;
