import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <nav className="bg-slate-300 min-h-8"></nav>
      <main className="container box-border mx-auto p-4 space-y-3">
        <Outlet />
      </main>
    </>
  );
}
