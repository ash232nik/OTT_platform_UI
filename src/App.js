import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import HomePage from "./screens/HomePage";
import Layout from "./Layout";
import "./sass/_tags.scss";
import ClientListPage from "./screens/clientPage/clientList";
import User from "./screens/user";
import Approvals from "./screens/approvals";
import Payment from "./screens/payment";
import { useContext } from "react";
import { AuthContext } from "./context";
import UserImage from "../src/assets/images/user.png";
import AssingPermission from "./context/data/assignPermission";
import ProfilePage from "./screens/profilePage";
import SettingPage from "./screens/settingPage";
import UploadPage from "./screens/upload";
import Subscription from "./screens/subscription";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "./utils/route";
import ClientDetails from "./screens/clientPage/clientDetails";
import UserDetails from "./screens/user/userDetails";

function ProtectedRoute({ children }) {
  const appContext = useContext(AuthContext);
  const { permissionObj } = appContext;
  const user = localStorage.getItem("user");
  if (user) {
    if (permissionObj && permissionObj?.access_data) {
      return <Layout> {children} </Layout>;
    }
    AssingPermission({ context: appContext, user: user });
    return <Layout> {children} </Layout>;
  }
  return <Navigate to="/login" />;
}
function App() {
  const { login } = PUBLIC_ROUTE;
  const {
    approvals,
    clients,
    homePage,
    payment,
    profile,
    settings,
    subscription,
    upload,
    users,
  } = PRIVATE_ROUTE;

  return (
    <Routes>
      <Route path={login} exact element={<Login />} />{" "}
      <Route
        path={homePage}
        exact
        element={
          <ProtectedRoute>
            <HomePage />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path={clients}
        exact
        element={
          <ProtectedRoute>
            <ClientListPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${clients}/:id`}
        element={
          <ProtectedRoute>
            <ClientDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path={users}
        exact
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${users}/:id`}
        exact
        element={
          <ProtectedRoute>
            <UserDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path={approvals}
        exact
        element={
          <ProtectedRoute>
            <Approvals />
          </ProtectedRoute>
        }
      />
      <Route
        path={payment}
        exact
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path={profile}
        exact
        element={
          <ProtectedRoute>
            <ProfilePage photo={UserImage} />
          </ProtectedRoute>
        }
      />
      <Route
        path={settings}
        exact
        element={
          <ProtectedRoute>
            <SettingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={upload}
        exact
        element={
          <ProtectedRoute>
            <UploadPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={subscription}
        exact
        element={
          <ProtectedRoute>
            <Subscription />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
