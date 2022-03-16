import { Routes, Route } from "react-router";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import requireAuth from "./components/requireAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={LoginForm} />
      <Route path="/signup" element={SignupForm} />
      <Route path="/dashboard" element={requireAuth(Dashboard)} />
    </Routes>
  );
}

export default App;
