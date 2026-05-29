import React from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

function getErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return error.statusText || 'Something went wrong while loading this page.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong while loading this page.';
}

export default function RouteError() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText || 'Unexpected Error'}`
    : 'Something Went Wrong';

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="surface-card w-full max-w-2xl p-6 text-center sm:p-8 lg:p-12">
        <p className="section-eyebrow">Unexpected Issue</p>
        <h1 className="mb-5 text-3xl leading-tight text-brand-ink sm:text-4xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-muted-foreground lg:mb-10 lg:text-lg">
          {getErrorMessage(error)}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="cta-base cta-dark w-full px-8 sm:w-auto"
          >
            TRY AGAIN
          </button>
          <Link to="/" className="cta-base cta-outline w-full px-8 sm:w-auto">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}