import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <SkeletonTheme baseColor="#202024" highlightColor="#2a2c36">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </QueryClientProvider>
  );
}

export default App;
