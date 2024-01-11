import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, BlogPage } from 'pages/index';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}
