import clsx from "clsx";
import { Outlet, NavLink, NavLinkRenderProps } from "react-router-dom";

const textColor = "text-slate-600";

export function AppLayout() {
  return (
    <>
      <nav
        className={clsx(
          "flex",
          "justify-center",
          "gap-4",
          "sm:gap-8",
          "bg-slate-300",
          "py-2",
          textColor,
        )}
      >
        <NavLink className={navLinkClasses} to="">
          Top
        </NavLink>
        <NavLink className={navLinkClasses} to="newest">
          New
        </NavLink>
        <NavLink className={navLinkClasses} to="ask">
          Ask
        </NavLink>
        <NavLink className={navLinkClasses} to="show">
          Show
        </NavLink>
        <NavLink className={navLinkClasses} to="jobs">
          Jobs
        </NavLink>
      </nav>
      <main
        className={clsx("container", "mx-auto", "p-4", "space-y-3", textColor)}
      >
        <Outlet />
      </main>
    </>
  );
}

function navLinkClasses({ isActive }: NavLinkRenderProps): string {
  if (isActive) {
    return "underline";
  }

  return "";
}
