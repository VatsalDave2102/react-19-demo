import { Link, useLocation } from "react-router-dom";
import routes from "../config/routes";
import type { RouteConfig } from "../config/routes";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const location = useLocation();

  // Function to render menu items, with support for nested routes
  const renderMenuItems = (items: RouteConfig[]) => {
    return items.map((route) => {
      const isActive =
        location.pathname === route.path ||
        (route.path !== "/" && location.pathname.startsWith(route.path));

      return (
        <li key={route.path}>
          <Link
            to={route.path}
            className={`flex items-center py-2 px-4 rounded transition-colors ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700 text-gray-300 hover:text-white"
            }`}
          >
            {route.icon}
            {route.label}
          </Link>

          {/* Handle nested routes if present */}
          {route.children && route.children.length > 0 && (
            <ul className="pl-4 mt-1 space-y-1">
              {renderMenuItems(route.children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className={`bg-gray-800 text-white w-64 fixed h-full transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-10`}
    >
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-5">React 19 Demo</h2>
        <nav>
          <ul className="space-y-2">{renderMenuItems(routes)}</ul>
        </nav>
      </div>
    </div>
  );
}
