import { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { FeedItems } from "./FeedItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/news",
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<p>Loading...</p>}>
              <FeedItems />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
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
