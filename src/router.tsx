import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const getBasepath = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  const match = window.location.pathname.match(/^\/(?:~[^/]+\/)?sharkgym(?=\/|$)/);
  return match?.[0] ?? "/";
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: getBasepath(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
