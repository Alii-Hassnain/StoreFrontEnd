import React from "react";

import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <div className="text-center">
          <div className="flex flex-col my-4">
            <h2 className="font-bold text-5xl text-error">{error.status}</h2>
            <h3 className="font-bold text-2xl text-error">
              {error.error.message}
            </h3>
          </div>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-center">
        <div className="flex flex-col my-4">
          <h2 className="font-bold text-5xl text-error">{error.status}</h2>
          <h3 className="font-bold text-2xl text-error">
            Something is Wrong Can't proceed
          </h3>
        </div>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </>
  );
};

export default Error;
