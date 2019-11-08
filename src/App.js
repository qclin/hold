import React, { Suspense } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';

import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';
import Sidebar from 'components/layout/Sidebar';

import './app.css';

addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <div className="content">
        <Sidebar side="left" />
        <Sidebar side="right" />
        <Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </Suspense>
      </div>
    </Root>
  );
}

export default App;
