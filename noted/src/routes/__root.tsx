import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        {/* Type-safe Links! */}
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        {/* <Link to="/about" className="[&.active]:font-bold">
          about
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link> */}
      </div>
      <hr />

      {/* This renders the child route (index.tsx, create.tsx, etc.) */}
      <Outlet />

      {/* Useful for debugging */}
      <TanStackRouterDevtools />
    </>
  );
}
