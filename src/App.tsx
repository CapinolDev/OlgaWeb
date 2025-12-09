import "./App.css";
import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import Navbar from "./components/navbar";
import LightRays from "./components/LightRays";

const pageModules = import.meta.glob("./**/page.tsx", {
  eager: true,
}) as Record<string, { default: ComponentType<any> }>;

const rawBasePath = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const stripBasePath = (pathname: string) => {
  if (!basePath) return pathname || "/";
  if (pathname.startsWith(basePath)) {
    const stripped = pathname.slice(basePath.length);
    if (stripped === "") return "/";
    return stripped.startsWith("/") ? stripped : `/${stripped}`;
  }
  return pathname || "/";
};

const normalizePath = (path: string) => {
  if (!path) return "/";
  const withoutHash = path.replace(/^#/, "");
  const cleaned = withoutHash.replace(/\/+$/, "");
  if (cleaned === "") return "/";
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

const hashForRoute = (route: string) => {
  const normalized = normalizePath(route);
  return normalized === "/" ? "#/" : `#${normalized}`;
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
    const initialPath = normalizePath(
      window.location.hash || stripBasePath(window.location.pathname)
    );
    return { path: initialPath, version: 0 };
  });

  const currentPath = routeState.path;

  useEffect(() => {
    const syncFromLocation = () => {
      const nextPath = normalizePath(
        window.location.hash || stripBasePath(window.location.pathname)
      );
      setRouteState((prev) => ({
        path: nextPath,
        version: nextPath === prev.path ? prev.version + 1 : 0,
      }));
    };

    window.addEventListener("hashchange", syncFromLocation);
    return () => window.removeEventListener("hashchange", syncFromLocation);
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

      let nextPath = normalizePath(stripBasePath(url.pathname));
      if (homePath && nextPath === "/") {
        nextPath = homePath;
      }

      e.preventDefault();

      const desiredHash = hashForRoute(nextPath);
      if (window.location.hash !== desiredHash) {
        window.location.hash = desiredHash;
        return;
      }

      setRouteState((prev) => ({
        path: nextPath,
        version: prev.version + 1,
      }));
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [homePath]);

  useEffect(() => {
    if (homePath && currentPath === "/") {
      const targetHash = hashForRoute(homePath);
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      } else {
        setRouteState((prev) => ({
          path: homePath,
          version: prev.version + 1,
        }));
      }
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
