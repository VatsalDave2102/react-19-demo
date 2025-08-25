// Define types for our routes
export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactNode;
  icon?: React.ReactNode; // Optional icon for sidebar
  children?: RouteConfig[]; // For nested routes
}

// Lazy import page components for better code splitting
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UseHookExample from "../pages/UseHookExample";
import RefAsAPropExample from "../pages/RefAsAPropExample";
// import ErrorHandlingExample from "../pages/ErrorHandlingExample";
import ActionExample from "../pages/ActionExample";
import WebComponentExample from "../pages/WebComponentExample";

// Central routes configuration
const routes: RouteConfig[] = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
  },
  {
    path: "/about",
    label: "About",
    element: <AboutPage />,
  },
  {
    path: "/ref-as-a-prop",
    label: "Ref As a Prop",
    element: <RefAsAPropExample />,
  },
  {
    path: "/use-hook-example",
    label: "use() Hook Example",
    element: <UseHookExample />,
  },
  // {
  //   path: "/error-handling-example",
  //   label: "Error Handling Example",
  //   element: <ErrorHandlingExample />,
  // },
  {
    path: "/actions-example",
    label: "Action Example",
    element: <ActionExample />,
  },
  {
    path: "/web-component-example",
    label: "Web Component Example",
    element: <WebComponentExample />,
  },
];

export default routes;
