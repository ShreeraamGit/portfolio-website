import { Routes, Route } from 'react-router-dom';
import { MainPage } from './routes';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const Blogs = lazy(() => import('./routes/Blogs'));
const Projects = lazy(() => import('./routes/Projects'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}>
            <Route
              path=":projectsId"
              element={<div className="">Inside Projects Page</div>}
            />
          </Route>
          <Route path="blogs" element={<Blogs />}>
            <Route
              path=":blogsId"
              element={<div className="">Inside Projects Page</div>}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
