import { Routes, Route } from 'react-router-dom';
import { Home, MainPage } from './routes';
import React, { Suspense, lazy } from 'react';

const Blogs = lazy(() => import('./routes/Blogs'));
const Projects = lazy(() => import('./routes/Projects'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
