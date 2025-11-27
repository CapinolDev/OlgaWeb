import "./App.css";
import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import Navbar from "./components/navbar";
import LightRays from "./components/LightRays";

const pageModules = import.meta.glob("./**/page.tsx", {
  eager: true,
}) as Record<string, { default: ComponentType<any> }>;

const normalizePath = (path: string) => {
  if (!path) return "/";
  const url = new URL(path, window.location.origin);
  const cleaned = url.pathname.replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
};

const normalizeRouteFromGlob = (filePath: string) => {
  let normalized = filePath.replace(/^\.\/?/, "/");
  normalized = normalized.replace(/^\/?src\//, "/");
  normalized = normalized.replace(/\/page\.tsx$/, "");
  return normalized === "" ? "/" : normalized;
};

function App() {
  const routes = useMemo(() => {
    return Object.entries(pageModules).reduce<Map<string, ComponentType<any>>>(
      (acc, [filePath, mod]) => {
        const routePath = normalizeRouteFromGlob(filePath);
        acc.set(routePath, mod.default);
        return acc;
      },
      new Map()
    );
  }, []);

  const homePath = routes.has("/home") ? "/home" : null;

  const [routeState, setRouteState] = useState(() => {
    const initialPath = normalizePath(window.location.pathname);
    return { path: initialPath, version: 0 };
  });

  const currentPath = routeState.path;

  useEffect(() => {
    const handlePop = () =>
      setRouteState((prev) => ({
        path: normalizePath(window.location.pathname),
        version: prev.version + 1,
      }));
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      let nextPath = normalizePath(url.pathname);
      if (homePath && nextPath === "/") {
        nextPath = homePath;
      }

      e.preventDefault();

      const historyPath =
        homePath && nextPath === homePath
          ? `${homePath}${url.search}${url.hash}`
          : `${url.pathname}${url.search}${url.hash}`;

      window.history.pushState({}, "", historyPath);

      setRouteState((prev) => ({
        path: nextPath,
        version: nextPath === prev.path ? prev.version + 1 : 0,
      }));
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [currentPath, homePath]);

  useEffect(() => {
    if (homePath && currentPath === "/") {
      window.history.replaceState({}, "", homePath);
      setRouteState((prev) => ({
        path: homePath,
        version: prev.version + 1,
      }));
    }
  }, [currentPath, homePath]);

  const resolvedPath = homePath && currentPath === "/" ? homePath : currentPath;
  const ActivePage = routes.get(resolvedPath) || routes.get("/");

  return (
    <div className="page">
      <div className="light-rays-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.04}
          lightSpread={0.45}
          rayLength={80}
          fadeDistance={20}
          mouseInfluence={1}
          followMouse
        />
      </div>

      <div className="page-shell">
        <Navbar
          key={`${resolvedPath}-${routeState.version}`}
          activePath={resolvedPath}
          routeVersion={routeState.version}
        />
        <main className="content">
          {ActivePage ? <ActivePage /> : <div>Page not found.</div>}
        </main>
      </div>
    </div>
  );
}

export default App;
