import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import AllCategories from "./components/pages/AllCategories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="all-categories" element={<AllCategories />} />
      </Route>
    </Routes>
  );
}

export default App;
