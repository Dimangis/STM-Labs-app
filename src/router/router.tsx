import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from 'constants/paths';
import { HomePage, BlogPage, SinglePostPage, AuthorPage } from 'pages/index';

export function Router() {
  return (
    <Routes>
      <Route path={PATH_LIST.ROOT} element={<HomePage />} />
      <Route path={PATH_LIST.BLOG} element={<BlogPage />} />
      <Route path={PATH_LIST.POST} element={<SinglePostPage />} />
      <Route path={PATH_LIST.AUTHOR} element={<AuthorPage />} />
    </Routes>
  );
}
