import MuiThemeWrapper from "./theme";
import MainPage from "src/components/templates/Main";
import MovieDetails from "src/components/templates/MovieDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/:type", element: <MovieDetails /> },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeWrapper>
        <RouterProvider router={router} />
      </MuiThemeWrapper>
    </QueryClientProvider>
  );
};

export default App;
