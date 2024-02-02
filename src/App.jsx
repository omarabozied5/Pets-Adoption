import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdoptPetContext from './context/AdoptPetContext';
import Loader from './components/Loader';

const Details = lazy(() => import('./Pages/Details'));
const SearchParams = lazy(() => import('./Pages/SearchParams'));
const NotFound = lazy(() => import('./Pages/NotFound'));

// import SearchParams from './Pages/SearchParams';
// import Details from './Pages/Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// App Component
const App = () => {
  const adoptPet = useState(null);
  return (
    <BrowserRouter>
      <AdoptPetContext.Provider value={adoptPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="loader-container">
                <Loader />
              </div>
            }
          >
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptPetContext.Provider>
    </BrowserRouter>
  );
};
// Get Root Element
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(<App />);
