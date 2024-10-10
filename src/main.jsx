import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DataList, Form } from "./Components";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Form />} />
        <Route path="/api-data" element={<DataList />} />
      </Route>
    </Routes>
  </Router>
);
