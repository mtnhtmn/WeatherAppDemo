import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './router/LoginPage';
import HomePage from './router/HomePage';
import { store } from './store/store';
import FavoritePage from './router/FavoritePage';

const queryClient = new QueryClient();

const App = function () {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="favorite" element={<FavoritePage />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
