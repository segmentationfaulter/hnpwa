import { ReactNode, Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./views/AppLayout";
import { FeedItems } from "./views/FeedItems";
import { NotFound } from "./views/NotFound";
import { Item } from "./views/Item";
import { User } from "./views/User";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: ":feedType?",
        element: (
          <ComponentWithSuspense>
            <FeedItems />
          </ComponentWithSuspense>
        ),
      },
      {
        path: "item/:itemId",
        element: (
          <ComponentWithSuspense>
            <Item />
          </ComponentWithSuspense>
        ),
      },
      {
        path: "user/:username",
        element: (
          <ComponentWithSuspense>
            <User />
          </ComponentWithSuspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export function App() {
  return <RouterProvider router={router} />;
}

function ComponentWithSuspense({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </ErrorBoundary>
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
