import { Routes, Route } from 'react-router-dom';
import { Home, Projects, Blogs, MainPage } from './routes';
import client from '@sanity/client';
import { useEffect } from 'react';

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
