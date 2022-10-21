import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import HomePage from "./screens/HomePage";
import Layout from "./Layout";

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("userAccess")) {
    return <Navigate to="/login" />;
  }
  return children;
}
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
