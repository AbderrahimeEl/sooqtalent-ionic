import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import LoginPage from "./pages/SingIn";
import DashboardLayout from "./pages/Dashboard";
import MainDashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />

      <PrivateRoute>
        <Route path="/dashboard" component={DashboardLayout} />
      </PrivateRoute>
      <Route path="/dashboard/profile" component={ProfilePage} />

      <Redirect to="/login" />
    </Switch>
  );
}
