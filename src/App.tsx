import { Suspense } from "react";
import { TopStories } from "./TopStories";

export function App() {
  return (
    <>
      <nav className="bg-slate-300 min-h-8"></nav>
      <main className="mx-auto w-fit p-4 space-y-3">
        <Suspense fallback={<p>Loading...</p>}>
          <TopStories />
        </Suspense>
      </main>
    </>
  );
}
