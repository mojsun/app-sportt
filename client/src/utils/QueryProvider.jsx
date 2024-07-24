// import { QueryClient, QueryClientProvider } from "react-query";
// const queryClient = new QueryClient();

// export function QueryProvider(props) {
//   return (
//     <QueryClientProvider client={queryClient}>{props}</QueryClientProvider>
//   );
// }
// export { queryClient };

import { QueryClient, QueryClientProvider } from "react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

export function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { queryClient };
