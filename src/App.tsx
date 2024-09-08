import React, { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { TopStories } from "./TopStories";

export function App() {
  return (
    <>
      <nav className="bg-slate-300 min-h-8"></nav>
      <main className="mx-auto w-fit p-4 space-y-3">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<p>Loading...</p>}>
            <TopStories />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}

function ErrorFallback({ error }: FallbackProps) {
  return (
    <>
      <p>
        Something went wrong while rendering the top stories, you can see the
        error message below which could help you figure out what went wrong
      </p>
      <pre className="text-red-500">{error.message}</pre>
    </>
  );
}
