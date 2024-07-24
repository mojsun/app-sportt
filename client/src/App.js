import AppRoutes from "./routes/AppRoutes.jsx";
import { QueryProvider } from "./utils/QueryProvider.jsx";
import "./App.css";
import "./App.scss";

const client = new ApolloClient({
  uri: "https://app-sportt-api.vercel.app.vercel.app/graphql",
  cache: new InMemoryCache(),
  credentials: "include", // If you're using cookies for authentication
});
function App() {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
}

export default App;
