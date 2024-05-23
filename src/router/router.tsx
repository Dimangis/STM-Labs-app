import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from 'router/paths';
import { HomePage } from 'pages/index';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Layout from 'components/Layout/Layout';
import { SearchProvider } from 'components/hooks/useSearch';

export function Router() {
  return (
    <Provider store={store}>
      <SearchProvider>
        <Routes>
          <Route path={PATH_LIST.ROOT} element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </SearchProvider>
    </Provider>
  );
}
