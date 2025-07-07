import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import routes from "./config/routes";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Dynamically generate routes from config */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path === "/" ? "" : route.path.replace(/^\//, "")}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
