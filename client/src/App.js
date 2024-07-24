import AppRoutes from "./routes/AppRoutes.jsx";
import { QueryProvider } from "./utils/QueryProvider.jsx";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
