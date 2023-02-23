import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { AppRoutes } from "./Routes";
import "./styles/App.css";

export function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
