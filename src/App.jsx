import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { Navbar } from "./Navbar";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <main className="container content-container mx-auto px-10 md:px-0">
          <Navbar></Navbar>
          <Routes>
            <Route path="/eZLog" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<h1>La pagina no existe!</h1>} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          </Routes>
        </main>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
